from flask import Flask, request, jsonify
from database import dbconnector
from werkzeug.utils import secure_filename
import os
from model import predict_faces
app = Flask(__name__)


@app.route('/')
def hello_world():
    return jsonify("hello world")

@app.route('/students', methods=['GET'])
def get_students():
    students = dbconnector.get_students()
    # print(students)
    return jsonify(students)

@app.route('/attendance', methods=['POST'])
def mark_attendance():
    data = request.get_json()
    success = dbconnector.mark_attendance(data['student_id'], data['course_id'],data['session_id'] ,data['status'])
    return jsonify({'success': success})

@app.route('/student_registration', methods=['POST']) 
def get_student_registration():
    data = request.get_json()
    # print(data)
    success = dbconnector.register_student(data['name'],data['username'],data['password'])
    return jsonify({'success': success})#hello

@app.route('/faculty_registration',methods=['POST'])
def get_faculty_registration():
    data=request.json
    print(data)
    success = dbconnector.register_faculty(data['name'],data['username'],data['password'])
    return jsonify({'success':success})

@app.route('/register_course',methods=['POST'])
def get_register_course():
    data=request.json
    print(data)
    success = dbconnector.register_course(data['Name'],data['code'],data['credit'],data['f_id'])
    return jsonify({'success':success})

@app.route('/register_session',methods=['POST'])
def register_session():
    data=request.json
    print(data)
    success = dbconnector.register_session(data['date'],data['hour'])
    return jsonify({'success':success})

@app.route('/course_registration',methods=['POST'])
def course_registration():
   data=request.json
   print(data)
   success = dbconnector.course_registration(data['student_id'],data['course_id'])
   return jsonify({'success':success})


@app.route('/student_login', methods=['GET']) 
def student_login():
    data=request.get_json()
    success = dbconnector.student_login(data['username'],data['password'])
    return jsonify({'success': success})


UPLOAD_FOLDER = r'Source Code\backend\uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '' in filename and filename. rsplit('.', 1) [1]. lower() in ALLOWED_EXTENSIONS

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER







@app.route('/<c_id>/<s_id>/upload1', methods=['POST'])
def upload_file1(c_id, s_id):
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        # Assuming predict_faces function takes the file path as input
        
        prediction = predict_faces(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        print(prediction)
        print(c_id)
        print(s_id)
        return jsonify({'msg': 'File uploaded successfully'}), 200
    else:
        return jsonify({'error': 'Invalid file format'}), 400






if __name__ == '__main__':
    app.run(debug=True, host="192.168.1.53") #server ip address

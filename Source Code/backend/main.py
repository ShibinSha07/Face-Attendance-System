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

@app.route('/student_login', methods=['GET']) 
def student_login():
    data=request.get_json()
    success = dbconnector.student_login(data['username'],data['password'])
    return jsonify({'success': success})


UPLOAD_FOLDER = r'Source Code\backend\img'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '' in filename and filename. rsplit('.', 1) [1]. lower() in ALLOWED_EXTENSIONS

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
@app. route('/media/upload', methods= ['POST' ])
def upload_media():
    if 'file' not in request.files:
        return jsonify({'error': 'media not provided'}), 400
    file = request. files ['file']
    if file.filename =='':
        return jsonify({'error': 'no file selected'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file. filename)
    file.save(os.path.join(app.config ['UPLOAD_FOLDER'], filename) )
    prediction=predict_faces(file)
    print(prediction)
    return jsonify({'msg': 'media uploaded successfully'})






if __name__ == '__main__':
    app.run(debug=True, host="192.168.1.37") #server ip address

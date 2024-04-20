from flask import Flask, request, jsonify
from database import dbconnector


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


if __name__ == '__main__':
    app.run(debug=True, host="192.168.1.37") #server ip address

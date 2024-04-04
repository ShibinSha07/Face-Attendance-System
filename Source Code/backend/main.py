from flask import Flask, request, jsonify
from database import dbconnector


app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello, World!"

@app.route('/students', methods=['GET'])
def get_students():
    students = dbconnector.get_students()
    return jsonify(students)

@app.route('/attendance', methods=['POST'])
def mark_attendance():
    data = request.get_json()
    success = dbconnector.mark_attendance(data['student_id'], data['course_id'],data['session_id'] ,data['status'])
    return jsonify({'success': success})

if __name__ == '__main__':
    app.run(debug=True)

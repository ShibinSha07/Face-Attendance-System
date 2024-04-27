import mysql.connector
from mysql.connector import Error

def get_connection():
    try:
        # Establish a connection to the MySQL database
        connection = mysql.connector.connect(
            host='localhost',
            database='fba',
            user='root',
            password='mysql'
        )

        if connection.is_connected():
            print('Connected to MySQL database')
            
        return connection

    except Error as e:
        print(f"Error while connecting to MySQL database: {e}")
        return None

def get_students():
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM students")
            students = cursor.fetchall()
            return students
        finally:
            cursor.close()
            connection.close()

def mark_attendance(student_id, course_id,session_id, status):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO attendance (id, c_id,s_id, status) VALUES (%s, %s, %s, %s)", (student_id, course_id,session_id, status))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

def register_student(name,username,password):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO students (Name,username,password) VALUES (%s, %s, %s)", (name,username,password))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

def register_faculty(name,username,password):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO faculty (Name,username,password) VALUES (%s, %s, %s)", (name,username,password))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

def register_course(c_id,Name,code,credit,f_id):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO course (c_id,Name,code,credit,f_id) VALUES (%s, %s, %s, %s, %s)", (c_id,Name,code,credit,f_id))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

def register_session(s_id,date,hour):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO session (s_id,date,hour) VALUES (%s, %s, %s)", (s_id,date,hour))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()
            
def course_registration(student_id,course_id):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO course_registration (student_id,course_id) VALUES (%s, %s)", (student_id,course_id))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()
    
def student_login(username,password):
    connection=get_connection()
    if connection:
        try:
            cursor=connection.cursor()
            cursor.execute("SELECT * FROM students WHERE username=%s AND password=%s",(username,password))
            result=cursor.fetchone()
            if result:
                return True
            else:
                return False
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

get_connection()




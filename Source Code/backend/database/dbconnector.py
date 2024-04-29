import mysql.connector
from mysql.connector import Error

def get_connection():
    try:
        # Establish a connection to the MySQL database
        connection = mysql.connector.connect(
            host='localhost',
            database='fba',
            user='root',
            password='1234'
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

def mark_attendance(student_id, course_id, session_id, status):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO attendance (id, c_id, s_id, status) VALUES (%s, %s, %s, %s)", (student_id, course_id, session_id, status))
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

def register_course(Name,code,credit,f_id):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO course (Name,code,credit,f_id) VALUES (%s, %s, %s, %s)", (Name,code,credit,f_id))
            connection.commit()
            return True
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

def register_session(date,hour):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO session (date,hour) VALUES ( %s, %s)", (date,hour))
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

def get_attendance_percentage(student_id, course_id):
    try:
        connection = get_connection()
        if connection:
            cursor = connection.cursor()
            query = """
                SELECT (COUNT(CASE WHEN status = 'present' THEN 1 END) / COUNT(*)) * 100 AS attendance_percentage
                FROM attendance
                WHERE id = %s AND c_id = %s
            """
            cursor.execute(query, (student_id, course_id))
            result = cursor.fetchone()
            attendance_percentage = result[0]
            return attendance_percentage if attendance_percentage!=None else 0
    except Exception as e:
        print(f"Error: {e}")
    finally:
        cursor.close()
        connection.close()
            
def student_list(c_id,s_id):
    connection=get_connection()
    if connection:
        try:
            cursor=connection.cursor()
            cursor.execute("SELECT a.id, s.Name, a.status FROM attendance AS a JOIN students AS s ON a.id = s.id WHERE a.c_id = %s AND a.s_id = %s;",(c_id,s_id))
            result=cursor.fetchall()
            return result
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()       

def get_student_name(s_id):
    connection=get_connection()
    if connection:
        try:
            cursor=connection.cursor()
            cursor.execute("SELECT Name FROM students WHERE id=%s",(s_id,))
            result=cursor.fetchone()
            return result[0]
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()

def get_students_in_course(c_id):
    connection = get_connection()
    if connection:
        try:
            cursor = connection.cursor()
            # Pass c_id as a tuple (c_id,)
            cursor.execute("SELECT id FROM students WHERE id IN (SELECT student_id FROM course_registration WHERE course_id = %s);", [c_id])
            result = cursor.fetchall()
            list1=[]
            for i in result:
                list1.append(i[0])
            return list1
        except Exception as e:
            print(e)
            return False
        finally:
            cursor.close()
            connection.close()



get_connection()


import os
import face_recognition
import cv2
import tkinter as tk
from datetime import datetime

class AttendanceApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Face Recognition Attendance App")

        # Initialize face recognition variables
        self.known_face_encodings = []
        self.known_face_names = []
        self.attendance_status = {}

        # Create GUI components
        self.create_gui()

        # Initialize the CCTV camera (provide the appropriate URL)
        self.video_capture = cv2.VideoCapture("http://<IP address:port>/video.mjpg rtsp://<IP address:port>/live3.sdp")

        # Load known faces
        self.load_known_faces()

        # Start face recognition loop
        self.recognize_faces()

    def create_gui(self):
        # Create GUI components
        self.label = tk.Label(self.root, text="Attendance App with Face Recognition", font=("Helvetica", 16))
        self.label.pack(pady=10)

        # Display attendance status
        self.attendance_status_label = tk.Label(self.root, text="Attendance Status:", font=("Helvetica", 14))
        self.attendance_status_label.pack()

        # Create exit button
        self.exit_button = tk.Button(self.root, text="Exit", command=self.exit_app)
        self.exit_button.pack(pady=20)

    def load_known_faces(self):
        # Specify the path to the directory containing known faces images
        known_faces_folder = r"C:\Users\rohan\OneDrive\Pictures\Screenshots"

        # Iterate over each file in the known_faces folder
        for filename in os.listdir(known_faces_folder):
            if filename.endswith(".jpg") or filename.endswith(".png"):
                # Construct the full file path
                known_image_path = os.path.join(known_faces_folder, filename)

                # Load the known face image
                known_image = face_recognition.load_image_file(known_image_path)

                # Find face locations in the image
                face_locations = face_recognition.face_locations(known_image)

                # If a face is found, extract the face encoding
                if face_locations:
                    # Assume there's only one face in the image for simplicity
                    face_encoding = face_recognition.face_encodings(known_image, face_locations)[0]

                    # Add the face encoding and corresponding name to the lists
                    self.known_face_encodings.append(face_encoding)
                    self.known_face_names.append(os.path.splitext(filename)[0])  # Use the file name as the person's name

                    # Initialize attendance status to False for each known face
                    self.attendance_status[os.path.splitext(filename)[0]] = False
                else:
                    print(f"No face found in {known_image_path}")

    def recognize_faces(self):
        while True:
            # Capture frame-by-frame
            ret, frame = self.video_capture.read()

            # Find all face locations and face encodings in the current frame
            face_locations = face_recognition.face_locations(frame)
            face_encodings = face_recognition.face_encodings(frame, face_locations)

            # Loop through each face found in the frame
            for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
                # Compare the current face with known faces
                matches = face_recognition.compare_faces(self.known_face_encodings, face_encoding)

                name = "Unknown"

                # If a match is found, use the name of the known face
                if True in matches:
                    first_match_index = matches.index(True)
                    name = self.known_face_names[first_match_index]

                    # Check if attendance has already been marked for this face
                    if not self.attendance_status[name]:
                        # Mark attendance and update the status
                        self.attendance_status[name] = True
                        attendance_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                        self.attendance_status_label.config(text=f"Attendance Marked for {name} at {attendance_time}")

                # Draw a rectangle around the face and display the name
                cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
                font = cv2.FONT_HERSHEY_DUPLEX
                cv2.putText(frame, name, (left + 6, bottom - 6), font, 0.5, (255, 255, 255), 1)

            # Display the resulting frame
            cv2.imshow('Video', frame)

            # Break the loop when 'q' key is pressed
            if cv2.waitKey(1) & 0xFF == ord('q'):
                self.exit_app()
                break

    def exit_app(self):
        # Release the CCTV camera and close all windows
        self.video_capture.release()
        cv2.destroyAllWindows()
        # Destroy the GUI window
        self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    app = AttendanceApp(root)
    root.mainloop()

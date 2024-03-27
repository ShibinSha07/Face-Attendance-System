import os
import face_recognition
import cv2
from datetime import datetime

# Load known faces
known_face_encodings = []
known_face_names = []

# Create a dictionary to store attendance status for each known face
attendance_status = {}

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
            known_face_encodings.append(face_encoding)
            known_face_names.append(os.path.splitext(filename)[0])  # Use the file name as the person's name

            # Initialize attendance status to False for each known face
            attendance_status[os.path.splitext(filename)[0]] = False
        else:
            print(f"No face found in {known_image_path}")

# Initialize the webcam
video_capture = cv2.VideoCapture(0)

while True:
    # Capture frame-by-frame
    ret, frame = video_capture.read()

    # Find all face locations and face encodings in the current frame
    face_locations = face_recognition.face_locations(frame)
    face_encodings = face_recognition.face_encodings(frame, face_locations)

    # Loop through each face found in the frame
    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        # Compare the current face with known faces
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)

        name = "Unknown"

        # If a match is found, use the name of the known face
        if True in matches:
            first_match_index = matches.index(True)
            name = known_face_names[first_match_index]

            # Check if attendance has already been marked for this face
            if not attendance_status[name]:
                # Mark attendance and update the status
                print(f"Attendance marked for {name} at {datetime.now()}")
                attendance_status[name] = True

        # Draw a rectangle around the face and display the name
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 0.5, (255, 255, 255), 1)

    # Display the resulting frame
    cv2.imshow('Video', frame)

    # Break the loop when 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all windows
video_capture.release()
cv2.destroyAllWindows()

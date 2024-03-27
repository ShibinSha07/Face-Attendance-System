import os
import face_recognition
import cv2

# Load known faces
known_face_encodings = []
known_face_names = []

# Path to the directory containing known faces images
known_faces_folder = r"C:\Users\rohan\AppData\Roaming\Microsoft\Windows\Libraries\CameraRoll.library-ms"

# Example: Load known faces from images in the "known_faces" folder
# Add the encoding and name for each known face

# Example 1: Load known face "rohan.jpg" from the "known_faces" folder
known_image_path_1 = os.path.join(known_faces_folder, "Screenshot 2023-09-28 183928.png")
known_image_1 = face_recognition.load_image_file(known_image_path_1)
known_encoding_1 = face_recognition.face_encodings(known_image_1)[0]
known_face_encodings.append(known_encoding_1)
known_face_names.append("Known Person 1")

# Example 2: Load known face "Screenshot 2023-09-28 183928.png" from the "known_faces" folder
known_image_path_2 = os.path.join(known_faces_folder, "Screenshot 2023-09-28 183928.png")
known_image_2 = face_recognition.load_image_file(known_image_path_2)
known_encoding_2 = face_recognition.face_encodings(known_image_2)[0]
known_face_encodings.append(known_encoding_2)
known_face_names.append("Known Person 2") 

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

import cv2
import face_recognition

# Load a sample image with faces
image_path = "photo.png"
image = face_recognition.load_image_file(image_path)

# Find face locations in the image
face_locations = face_recognition.face_locations(image)

# Load the image with OpenCV for display
img = cv2.imread(image_path)

# Draw rectangles around the faces
for face_location in face_locations:
    top, right, bottom, left = face_location
    cv2.rectangle(img, (left, top), (right, bottom), (0, 255, 0), 2)

# Display the image with faces highlighted
cv2.imshow("Face Recognition", img)
cv2.waitKey(0)
cv2.destroyAllWindows()


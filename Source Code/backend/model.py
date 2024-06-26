import cv2
import pickle
import face_recognition

def predict_faces(img_path, threshold=0.6):
    # Model path
    model_path = r"Source Code\Models\Model_3_Dlib\classifier\trained_knn_model.clf"
    
    # Load a trained KNN model
    with open(model_path, 'rb') as f:
        knn_clf = pickle.load(f)

    # Load image file and resize
    img = face_recognition.load_image_file(img_path)
    img = cv2.resize(img, (0, 0), fx=0.25, fy=0.25)  # Resize by 1/4

    # Find face locations and encodings
    face_locations = face_recognition.face_locations(img)
    
    if not face_locations:
        # Return an empty list if no faces are found
        return [[]]
    
    faces_encodings = face_recognition.face_encodings(img, known_face_locations=face_locations)

    # Use the KNN model to find the best matches for the faces
    closest_distances = knn_clf.kneighbors(faces_encodings, n_neighbors=2)
    matches = [closest_distances[0][i][0] <= threshold for i in range(len(face_locations))]

    # Predict classes and remove classifications that aren't within the threshold
    predictions = [(pred, loc) if rec else ("unknown", loc) for pred, loc, rec in zip(knn_clf.predict(faces_encodings), face_locations, matches)]
    
    return predictions

# Example usage:
# img_path = r"Source Code\backend\uploads\image.jpg"
# predictions = predict_faces(img_path)
# print(predictions)
# # for name, (top, right, bottom, left) in predictions:
#     # Scale back the face locations since the image was resized
#     top *= 4
#     right *= 4
#     bottom *= 4
#     left *= 4
#     print(f"Name: {name}, Location: ({top}, {right}, {bottom}, {left})")

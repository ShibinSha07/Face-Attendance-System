import face_recognition
import os
import pickle

def encode_faces_from_folder(input_folder):
    face_encodings = []
    face_names = []

    for filename in os.listdir(input_folder):
        if filename.endswith((".jpg", ".png")):
            image_path = os.path.join(input_folder, filename)
            face_image = face_recognition.load_image_file(image_path)
            face_locations = face_recognition.face_locations(face_image)

            if len(face_locations) == 1:
                face_encoding = face_recognition.face_encodings(face_image, face_locations)[0]
                # Extract the name from the filename
                name = os.path.splitext(filename)[0]
                
                # Add the face encoding and name to the lists
                face_encodings.append(face_encoding)
                face_names.append(name)
            else:
                print(f"Skipping {filename} due to multiple faces or no face found.")

    return face_encodings, face_names

def save_face_encodings(encodings, names, output_file):
    data = {"encodings": encodings, "names": names}
    with open(output_file, 'wb') as file:
        pickle.dump(data, file)
    print(f"Face encodings saved to {output_file}")

def load_face_encodings(input_file):
    try:
        with open(input_file, 'rb') as file:
            data = pickle.load(file)
        print(f"Face encodings loaded from {input_file}")
        return data["encodings"], data["names"]
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
        return [], []

# Example usage:
input_folder = r"model code\photo123"
output_file = "encoding_input_faces.pkl"

# Encode faces and save to file
encodings, names = encode_faces_from_folder(input_folder)
save_face_encodings(encodings, names, output_file)

# Load encoded faces from file
loaded_encodings, loaded_names = load_face_encodings(output_file)

# Print the number of loaded encoded faces
print(f"Number of loaded encoded faces: {len(loaded_encodings)}")

# Iterate through the loaded encoded faces and their names
for encoding, name in zip(loaded_encodings, loaded_names):
    print(f"Name: {name}, Encoding: {encoding}")

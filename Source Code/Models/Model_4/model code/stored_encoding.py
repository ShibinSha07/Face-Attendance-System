import face_recognition
import os
import pickle

def encode_faces_from_folder(main_folder_path):
    all_face_encodings = []
    all_face_names = []

    for person_folder in os.listdir(main_folder_path):
        person_folder_path = os.path.join(main_folder_path, person_folder)
        if os.path.isdir(person_folder_path):
            face_encodings = []
            face_names = []

            for filename in os.listdir(person_folder_path):
                if filename.endswith((".jpg", ".png")):
                    image_path = os.path.join(person_folder_path, filename)
                    face_image = face_recognition.load_image_file(image_path)
                    face_locations = face_recognition.face_locations(face_image)

                    if len(face_locations) == 1:
                        face_encoding = face_recognition.face_encodings(face_image, face_locations)[0]
                        # Add the face encoding and name to the lists
                        face_encodings.append(face_encoding)
                        face_names.append(person_folder)  # Use the name of the folder as the person's name
                    else:
                        print(f"Skipping {filename} in {person_folder} due to multiple faces or no face found.")

            # Add the face encodings and names for this person to the overall lists
            all_face_encodings.extend(face_encodings)
            all_face_names.extend(face_names)

    return all_face_encodings, all_face_names

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
main_folder_path = r"model code\Screenshots"
output_file = "stored_encodings_file.pkl"

# Encode faces and save to file
encodings, names = encode_faces_from_folder(main_folder_path)
save_face_encodings(encodings, names, output_file)

# Load encoded faces from file
loaded_encodings, loaded_names = load_face_encodings(output_file)

# Print the number of loaded encoded faces
print(f"Number of loaded encoded faces: {len(loaded_encodings)}")

# Iterate through the loaded encoded faces and their names
for encoding, name in zip(loaded_encodings, loaded_names):
    print(f"Name: {name}, Encoding: {encoding}")

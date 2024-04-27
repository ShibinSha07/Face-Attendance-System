import face_recognition
import pickle 

def compare_face_encodings(input_encodings_file, stored_encodings_file):
    # Load input encodings
    with open(input_encodings_file, 'rb') as file:
        input_data = pickle.load(file)
    input_encodings, input_names = input_data["encodings"], input_data["names"]
    
    # Load stored encodings
    with open(stored_encodings_file, 'rb') as file:
        stored_data = pickle.load(file)
    stored_encodings, stored_names = stored_data["encodings"], stored_data["names"]
    
    # Initialize a dictionary to store results
    results = {}
    
    # Compare input encodings with stored encodings
    for input_encoding, input_name in zip(input_encodings, input_names):
        # Initialize a list to store matches for the current input encoding
        matches = []
        
        # Compare the current input encoding with all stored encodings
        for stored_encoding, stored_name in zip(stored_encodings, stored_names):
            match = face_recognition.compare_faces([stored_encoding], input_encoding)[0]
            matches.append((stored_name, match))
        
        # Store the matches for the current input encoding
        results[input_name] = matches
    
    return results

# Example usage:
input_encodings_file = "encoding_input_faces.pkl"
stored_encodings_file = "stored_encodings_file.pkl"

# Compare face encodings
results = compare_face_encodings(input_encodings_file, stored_encodings_file)

# Print results
for input_name, matches in results.items():
    print(f"Input Face: {input_name}")
    for stored_name, match in matches:
        if match:
            print(f" - Match found with stored face: {stored_name}")
        else:
            print(f" - No match with stored face: {stored_name}")

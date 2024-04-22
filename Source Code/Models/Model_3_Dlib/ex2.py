import tkinter as tk
from tkinter import filedialog
from PIL import ImageTk, Image, ImageDraw, ImageFont
import pandas as pd
from model import predict_faces

def mark_attendance(period, img_path):
    # Call predict_faces function to get predictions
    predictions = predict_faces(img_path)

    # Load attendance data from Excel
    attendance_df = pd.read_excel(r"Source Code\Models\Model_3_Dlib\attendance.xlsx")

    # Create a set of existing student names from the attendance DataFrame
    existing_names = set(attendance_df['Student Name'])

    # Iterate over existing names in the Excel sheet and mark absent if not recognized
    for name in existing_names:
        if name not in [pred[0] for pred in predictions]:
            # Mark the student as absent if their name is not recognized in the predictions
            attendance_df.loc[attendance_df['Student Name'] == name, period] = 'Absent'

    # Iterate over predictions and mark attendance for recognized faces
    for name, _ in predictions:
        if name in existing_names:
            # Mark the student as present if their name is recognized in the predictions
            attendance_df.loc[attendance_df['Student Name'] == name, period] = 'Present'
        else:
            # Add the recognized student to the attendance DataFrame and mark as present
            attendance_df = attendance_df.append({'Student Name': name, period: 'Present'}, ignore_index=True)

    # Save updated attendance data to Excel
    attendance_df.to_excel(r"Source Code\Models\Model_3_Dlib\attendance.xlsx", index=False)

    # Display image with recognized faces and names
    img = Image.open(img_path)
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("arial.ttf", 20)  # Font for drawing text

    # Draw rectangles and text for each recognized face
    for name, (top, right, bottom, left) in predictions:
        # Draw rectangle around the face
        draw.rectangle([(left, top), (right, bottom)], outline=(255, 0, 0), width=2)
        # Draw text (name) above the face
        draw.text((left, top - 20), name, fill=(255, 255, 255), font=font)

    #img.thumbnail((300, 200), Image.ANTIALIAS)  # Resize the image for display
    img = ImageTk.PhotoImage(img)
    img_label.config(image=img)
    img_label.image = img

def browse_image():
    filename = filedialog.askopenfilename(initialdir="/", title="Select Image", filetypes=(("Image Files", "*.png;*.jpg;*.jpeg"), ("All Files", "*.*")))
    img_path_entry.delete(0, tk.END)
    img_path_entry.insert(0, filename)

def mark_attendance_from_gui():
    period = period_entry.get()
    img_path = img_path_entry.get()
    mark_attendance(period, img_path)
    result_label.config(text="Attendance marked successfully.")

# Create Tkinter window
root = tk.Tk()
root.title("Mark Attendance")
root.geometry("500x500")  # Set the size of the window

# Period entry
period_label = tk.Label(root, text="Enter the period:")
period_label.pack()
period_entry = tk.Entry(root)
period_entry.pack()

# Image path entry
img_path_label = tk.Label(root, text="Select Image:")
img_path_label.pack()
img_path_entry = tk.Entry(root)
img_path_entry.pack()
browse_button = tk.Button(root, text="Browse", command=browse_image)
browse_button.pack()

# Mark attendance button
mark_button = tk.Button(root, text="Mark Attendance", command=mark_attendance_from_gui)
mark_button.pack()

# Image display
img_label = tk.Label(root)
img_label.pack()

# Result label
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()

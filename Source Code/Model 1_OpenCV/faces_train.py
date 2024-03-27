import os
import cv2 as cv
import numpy as np

people=[]
for i in os.listdir(r'C:\Users\shibi\Desktop\OpenCV\Faces'):
    people.append(i)

DIR=r"C:\Users\shibi\Desktop\OpenCV\Faces"

haar_cascade=cv.CascadeClassifier('haar_face.xml')

features=[]
labels=[]

def create_train():
    for person in people:
        path=os.path.join(DIR,person)
        label=people.index(person)

        for img in os.listdir(path):
            img_path=os.path.join(path,img)

            img_array=cv.imread(img_path)
            gray=cv.cvtColor(img_array,cv.COLOR_BGR2GRAY)

            face_rect=haar_cascade.detectMultiScale(img_array,scaleFactor=1.1,minNeighbors=4)
             
            for (x,y,w,h) in face_rect:
                faces_roi= gray[y:y+h,x:x+w]
                features.append(faces_roi)
                labels.append(label)

create_train()
print('Training done-------------')

# print(f'length of the features={len(features)}')
# print(f'length of the labels={len(labels)}')

features=np.array(features,dtype='object')
labels=np.array(labels)

face_recognizer=cv.face.LBPHFaceRecognizer_create()

#train the recognizer
face_recognizer.train(features,labels)

face_recognizer.save('face_trained.yml')
np.save('features.npy',features)
np.save('labels.npy',labels)
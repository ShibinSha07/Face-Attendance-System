import numpy as np
import cv2 as cv
import os

haar_cascade=cv.CascadeClassifier('haar_face.xml')

people=[]
for i in os.listdir(r'C:\Users\shibi\Desktop\OpenCV\Faces'):
    people.append(i) 

face_recoginizer=cv.face.LBPHFaceRecognizer_create()
face_recoginizer.read('face_trained.yml')

img=cv.imread(r'C:\Users\shibi\Desktop\OpenCV\Faces\Validate\Jerry Seinfield\1.jpg')

gray=cv.cvtColor(img,cv.COLOR_BGR2GRAY)
cv.imshow('person',gray)

#detect face
face_rect=haar_cascade.detectMultiScale(gray,scaleFactor=1.1,minNeighbors=4)

for (x,y,w,h) in face_rect:
    face_roi=gray[x:x+w,y:y+h]
    
    label,confindence=face_recoginizer.predict(face_roi)
    print(f'label={people[label]} with a confidence of {confindence}')

    cv.putText(img,str(people[label]),(20,20),cv.FONT_HERSHEY_COMPLEX,1.0,(0,255,0),2)
    cv.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)

cv.imshow('detected face',img)

cv.waitKey(0)
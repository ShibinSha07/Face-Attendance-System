import cv2 as cv


# print(img.shape)
cap=cv.VideoCapture(0)
# cap=cv.VideoCapture('Videos/dog.mp4')

while True:
    isTrue, frame=cap.read()
    # cv.imshow('Video',frame)


    # cv.imshow('person',frame)

    gray =cv.cvtColor(frame,cv.COLOR_BGR2GRAY)
    # print(gray.shape)
    # cv.imshow('gray',gray)

    haar_cascade=cv.CascadeClassifier('haar_face.xml')

    faces_rect=haar_cascade.detectMultiScale(gray,scaleFactor=1.1,minNeighbors=3)

    # print(f'Number of faces found={len(faces_rect)}')

    for (x,y,w,h) in faces_rect:
        cv.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),thickness=2)

    cv.imshow("detected faces",frame)

    if cv.waitKey(20) & 0xFF==ord('e'):
        break

cv.waitKey(0)

#!/bin/bash

IMAGE="webapp"
APP="webapp-1"
docker build -t $IMAGE .
docker run -d --name $APP -p 8080:80 $IMAGE

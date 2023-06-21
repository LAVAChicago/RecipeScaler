FROM postgres:15.2

#FRONT END Development stage 1
FROM node:18
WORKDIR /front-end-react
COPY package*.json ./
COPY . .
EXPOSE 3000

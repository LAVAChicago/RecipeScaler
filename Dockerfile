FROM postgres
EXPOSE 5432

#FRONT END Development stage 1
FROM node:18
WORKDIR /front-end-react
COPY package*.json ./
COPY . .
EXPOSE 3000

FROM node:18
WORKDIR /server
COPY package*.json ./
COPY . .
EXPOSE 5000

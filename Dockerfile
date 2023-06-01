FROM postgres:15.2

FROM node:17-alpine as builder
WORKDIR /front-end-react
COPY package.json .

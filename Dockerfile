FROM postgres:15.2

#FRONT END Development stage 1
FROM node:17-alpine as builder
WORKDIR /front-end-react
COPY /front-end-react/package.json .
COPY /front-end-react/package-lock.json .
RUN npm install
COPY /front-end-react/. .
RUN npm run build

#FRONT END Development stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /front-end-react/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

#lightweight node js image as the base
FROM node:18-alpine

#setting up working directory
WORKDIR /app

#copy the package and package-lock json to the working directory
COPY package*.json ./

#install necessary dependencies
RUN npm install

#copy rest of code from source to destination
COPY . .

#build the app
RUN npm run build

#exposing the port on which it will run
EXPOSE 3001

#start the app
CMD [ "npm","start" ]
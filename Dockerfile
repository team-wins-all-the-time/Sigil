FROM node:8

#create app directory

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]


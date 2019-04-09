FROM node:10.14-alpine

WORKDIR /app 

COPY package*json ./

COPY yarn.lock ./

RUN yarn install

COPY src ./src

EXPOSE 3000

CMD yarn start

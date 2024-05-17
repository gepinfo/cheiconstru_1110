FROM node:20.2-alpine
COPY . /safety
WORKDIR /safety
RUN npm install
RUN npm i -g ts-node
CMD npm run prod
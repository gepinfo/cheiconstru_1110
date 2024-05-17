FROM node:20.2-alpine
COPY . /contractors
WORKDIR /contractors
RUN npm install
RUN npm i -g ts-node
CMD npm run prod
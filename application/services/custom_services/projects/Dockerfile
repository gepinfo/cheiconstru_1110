FROM node:20.2-alpine
COPY . /projects
WORKDIR /projects
RUN npm install
RUN npm i -g ts-node
CMD npm run prod
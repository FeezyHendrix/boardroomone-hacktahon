FROM node:alpine

RUN mkdir -p /usr/src/image-uploader && chown -R node:node /usr/src/image-uploader

WORKDIR /usr/src/image-uploader

COPY package.json package-lock.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000
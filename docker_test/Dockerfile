FROM node:14.18.1

WORKDIR /docker_test

COPY package.json package-lock.json ./

RUN npm ci

COPY index.js .

ENTRYPOINT ["node", "index.js"]


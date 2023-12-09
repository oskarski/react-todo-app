FROM node:16.16.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
# Needed if we use tailwind
COPY tailwind.config.js .
COPY src ./src
COPY public ./public

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

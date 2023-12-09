FROM node:16.16.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
# Needed if we use tailwind
COPY tailwind.config.js .
COPY src ./src
COPY public ./public

RUN npm install

RUN npm run build

FROM nginx:1.21.0-alpine as runner
ENV NODE_ENV production

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

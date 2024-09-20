FROM node:16-alpine as build

WORKDIR /app

COPY package.json .
COPY jsconfig.json .
COPY .npmrc .
COPY vue.config.js .
COPY .env .

RUN apk add --no-cache build-base g++ python3-dev musl-dev git

# RUN npm install
RUN yarn install
COPY . .

ARG VUE_APP_TITLE

RUN VUE_APP_TITLE=${VUE_APP_TITLE} && \
    yarn build

# Build project

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
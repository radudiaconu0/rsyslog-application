FROM node:latest
WORKDIR /client
COPY . .
RUN yarn install
EXPOSE 8080
ENTRYPOINT ["yarn", "serve"]
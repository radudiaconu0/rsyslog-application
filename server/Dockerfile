FROM node:latest
WORKDIR /server
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add @nestjs/cli

COPY . .

EXPOSE 3000
CMD ["yarn", "start:dev"]
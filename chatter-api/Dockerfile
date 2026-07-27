FROM node:22-alpine

RUN apk add --no-cache netcat-openbsd

WORKDIR /app

RUN yarn global add @nestjs/cli

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]

CMD ["yarn", "start:dev"]
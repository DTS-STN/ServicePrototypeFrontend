FROM node:12-alpine
LABEL maintainer="-"

COPY . /src

WORKDIR /src

RUN npm install --quiet --production

EXPOSE 5000

ENTRYPOINT [ "npm", "start" ]
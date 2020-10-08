FROM node:lts-alpine
ARG NODE_ENV='production'
ENV NODE_ENV $NODE_ENV
COPY ./ ./
RUN npm install && npm run build
FROM nginx
COPY --from=0 build /usr/share/nginx/html

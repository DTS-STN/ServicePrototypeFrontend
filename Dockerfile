FROM node:lts-alpine
ARG NODE_ENV='production'
ARG REACT_APP_STRAPI_BASE_URL=""
ENV NODE_ENV $NODE_ENV
ENV REACT_APP_STRAPI_BASE_URL $REACT_APP_STRAPI_BASE_URL
COPY ./ ./
RUN npm install && npm run build
FROM nginx
COPY --from=0 build /usr/share/nginx/html
FROM node:lts-alpine
ARG NODE_ENV='production'
ARG REACT_APP_BENEFITSERVICE_BASE_URL=""
ARG REACT_APP_KEYCLOAK_URL=""
ARG REACT_APP_KEYCOAK_REALM=""
ARG REACT_APP_KEYCLAOK_CLIENT_ID=""
ENV NODE_ENV $NODE_ENV
ENV REACT_APP_BENEFITSERVICE_BASE_URL $REACT_APP_BENEFITSERVICE_BASE_URL
COPY ./ ./
RUN npm install --only=prod && npm run build
FROM nginx
COPY --from=0 build /usr/share/nginx/html
COPY ./nginx/conf.d /etc/nginx/conf.d
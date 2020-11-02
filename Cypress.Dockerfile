FROM cypress/included:3.4.0 

ADD ./ /web 
WORKDIR /web 
RUN mkdir -p ~/cypress 

COPY package.json . 
COPY package-lock.json . 


ENV CI=1 
RUN npm ci --save cypress-react-selector
RUN npx cypress verify

COPY cypress ./cypress
COPY cypress.json .




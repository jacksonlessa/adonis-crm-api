FROM node:lts-alpine

WORKDIR /home/jackson/study/crm-adonis-api

# Copy package.json & package-lock.json to the root of the api dir
COPY package*.json ./

RUN npm install

# Let all incoming connections use the port below
EXPOSE 1379

CMD node ace serve
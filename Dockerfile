FROM node:lts-hydrogen

WORKDIR /app

COPY ./package.json .

RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 8000


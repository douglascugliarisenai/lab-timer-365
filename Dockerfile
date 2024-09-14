FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

expose 3000

CMD ["npm", "run", "dev"]
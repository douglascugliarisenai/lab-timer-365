FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine as runner

COPY --from=builder /app/build /usr/share/nginx/html

expose 80

CMD ["npm", "run", "dev"]
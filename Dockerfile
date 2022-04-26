FROM node:14.19-alpine
EXPOSE 3000
WORKDIR /src

COPY . .

RUN npm install

CMD ["npm", "start"]

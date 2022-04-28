FROM arm32v6/node:16.14-alpine
EXPOSE 3000
WORKDIR /src
ENV REACT_APP_SPADES_API=
COPY . .

RUN npm install

CMD ["npm", "start"]

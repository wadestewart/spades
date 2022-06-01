FROM arm32v6/node:16.14-alpine as build
EXPOSE 3000
WORKDIR /src
# ENV REACT_APP_SPADES_API=http://localhost:3050
ENV REACT_APP_SPADES_API=https://api.spades.fun
COPY . .

RUN npm ci

RUN npm run build

# production env
FROM arm32v6/nginx:alpine as final
COPY --from=build /src/build /usr/share/nginx/html
COPY --from=build /src/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

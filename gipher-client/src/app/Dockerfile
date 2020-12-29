FROM node:alpine-lts

WORKDIR /src/app

COPY ./ ./ 

RUN npm install 

RUN npm install http-server -g

RUN npm run build

WORKDIR /src/build/dist/GIPHER-CLIENT

CMD ["http-server", "-cl", "-p", "4200"]
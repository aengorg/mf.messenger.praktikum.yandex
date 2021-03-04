FROM node:14

COPY . .
RUN npm install && npm run build

EXPOSE 80
CMD node server.js

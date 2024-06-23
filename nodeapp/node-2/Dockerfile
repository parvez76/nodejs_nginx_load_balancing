FROM node
WORKDIR /app
COPY package.json ./
RUN npm install express
COPY . .
EXPOSE 5002
CMD [ "node", "app.js" ]
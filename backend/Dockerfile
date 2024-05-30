FROM node:alpine
WORKDIR /backend
COPY package.json .
EXPOSE 8081
RUN npm install
COPY . .
CMD ["npm", "start"]
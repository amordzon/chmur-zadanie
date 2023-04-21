FROM node as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 4000
CMD ["npm", "run", "start"]

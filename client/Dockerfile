FROM node as builder1
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder1 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM mongo
WORKDIR /database
COPY staff.json /staff.json
COPY skrypt.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/skrypt.sh
EXPOSE 27017
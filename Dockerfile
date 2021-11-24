FROM node
WORKDIR /app
RUN npm install express mysql
COPY . .
EXPOSE 8000
CMD ["node","app.js"]
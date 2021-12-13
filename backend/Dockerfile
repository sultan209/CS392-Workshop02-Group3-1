FROM node:17-alpine
RUN mkdir food-prediction
WORKDIR /food-prediction
COPY package.json .
RUN npm install
COPY ./ ./
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "src/main.js"]

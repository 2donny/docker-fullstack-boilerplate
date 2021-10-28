FROM node:alpine

# Create app directory in case of unexpected overwriting
WORKDIR /app

# For cached node_modules
COPY package*.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]
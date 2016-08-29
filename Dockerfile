FROM node:6.2.2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --silent

# Bundle app source
COPY . /usr/src/app

RUN npm run clean-build

EXPOSE 5000

CMD [ "npm", "start" ]

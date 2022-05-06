FROM node:14.18.2

WORKDIR /usr/src/global4ukraine

COPY package*.json .
COPY yarn.lock .
RUN yarn install

COPY . .

RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
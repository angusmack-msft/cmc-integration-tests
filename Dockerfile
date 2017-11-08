FROM node:8.9.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install && yarn cache clean

COPY . /usr/src/app

ENTRYPOINT [ "yarn" ]
CMD [ "test" ]

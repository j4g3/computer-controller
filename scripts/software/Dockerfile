FROM node:alpine

RUN mkdir -p /build
WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build


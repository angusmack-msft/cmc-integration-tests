#!/bin/sh

docker-compose down

docker-compose up -d remote-webdriver \
                     citizen-frontend \
                     legal-frontend


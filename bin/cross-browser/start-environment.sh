#!/bin/sh

COMPOSE_FILES="-f docker-compose.yml -f docker-compose.cross-browser.yml"
docker-compose ${COMPOSE_FILES} up ${@} -d saucelabs-connect \
                                           citizen-frontend \
                                           legal-frontend

#!/bin/sh

COMPOSE_FILES="-f docker-compose.yml"

if [ -n "$1" ] && [ -e "docker-compose.$1.yml" ]
then
  COMPOSE_FILES="$COMPOSE_FILES -f docker-compose.$1.yml"
  shift
fi

docker-compose ${COMPOSE_FILES} up ${@} integration-tests

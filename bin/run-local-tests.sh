#!/bin/sh

if [[ ${#} -ge 1 ]]
then
  docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm integration-tests test -- --grep "${1}"
else
  docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm integration-tests
fi


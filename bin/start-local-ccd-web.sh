#!/bin/sh

COMPOSE_FILES="-f docker-compose.yml -f docker-compose.local.yml"
docker-compose ${COMPOSE_FILES} up ${@} -d ccd-case-management-web \
                                           ccd-api-gateway

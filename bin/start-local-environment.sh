#!/bin/sh

COMPOSE_FILES="-f docker-compose.yml -f docker-compose.local.yml"
docker-compose ${COMPOSE_FILES} up ${@} -d claim-store-api \
                                           authentication-web \
                                           idam-api \
                                           fees-api \
                                           draft-store-api \
                                           payments-api \
                                           pdf-service-api \
                                           document-management-api-gateway-web \
                                           document-management-api \
                                           ccd-data-store-api \
                                           ccd-definition-store-api \
                                           ccd-user-profile-api \
                                           ccd-importer

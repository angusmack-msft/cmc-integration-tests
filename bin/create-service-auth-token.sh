#!/bin/sh
## Create service auth token for the micro service
##
##  Usage: ./create-service-auth-token.sh [microservice_name]
##
## Options:
##    - microservice_name: Name of the microservice. Default to `cmc_claim_store`.
##
## Returns a valid IDAM service token for the given microservice.


MICROSERVICE="${1:-cmc_claim_store}"

curl --silent http://localhost:4552/testing-support/lease -F microservice="${MICROSERVICE}"

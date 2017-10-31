#!/bin/bash

set -e

USER_EMAIL="${1:-me@server.net}"
FORENAME="${2:-John}"
SURNAME="${3:-Smith}"
PASSWORD=Password12

curl -XPOST -H 'Content-Type: application/json' http://localhost:8080/testing-support/accounts -d '{
    "email": "'${USER_EMAIL}'",
    "forename": "'${FORENAME}'",
    "surname": "'${SURNAME}'",
    "levelOfAccess": 0,
    "userGroup": {
      "code": "cmc-solicitor"
    },
    "activationDate": "",
    "lastAccess": "",
    "password": "'${PASSWORD}'"
}'

echo -e "Created user with:\nUsername: ${USER_EMAIL}\nPassword:${PASSWORD}\nFirstname: ${FORENAME}\nSurname: ${SURNAME}"

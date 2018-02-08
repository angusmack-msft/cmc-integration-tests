#!/bin/bash

set -e

USER_EMAIL="${1:-solicitor@server.net}"
FORENAME="${2:-John}"
SURNAME="${3:-Smith}"
PASSWORD=Password12
USER_GROUP="cmc-solicitor"

binFolder=$(dirname "$0")

${binFolder}/create-user.sh "${USER_EMAIL}" "${FORENAME}" "${SURNAME}" "${USER_GROUP}"

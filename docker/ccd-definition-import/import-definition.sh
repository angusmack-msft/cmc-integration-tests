#!/bin/sh
## Import the given definition in CCD definition store.
##
## Usage: ./import-definition.sh path_to_definition [userToken] [serviceToken]
##
## Prerequisites:
##  - Microservice `ccd_gw` must be authorised to call service `ccd-definition-store-api`

if [ -z "$1" ]
  then
    echo "Usage: ./import-definition.sh path_to_definition [userToken] [serviceToken]"
    exit 1
elif [ ! -f "$1" ]
  then
    echo "File not found: $1"
    exit 1
fi

userToken=$2
serviceToken=$3

curl --silent \
  http://ccd-definition-store-api:4451/import \
  -H "Authorization: Bearer ${userToken}" \
  -H "ServiceAuthorization: Bearer ${serviceToken}" \
  -F file="@$1"

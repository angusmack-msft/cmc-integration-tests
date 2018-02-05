#!/bin/sh
set -e
# create user with ccd-import role
/create-importer-user.sh

userToken=$(curl --silent http://idam-api:8080/testing-support/lease -Fid="1" -Frole="ccd-import")
serviceToken=$(curl --silent http://service-auth-provider-api:8080/testing-support/lease -Fmicroservice="cmc_claim_store")

# add ccd role
/add-ccd-role.sh "caseworker-cmc" "RESTRICTED" "${userToken}" "${serviceToken}"
/add-ccd-role.sh "caseworker-cmc-solicitor" "RESTRICTED" "${userToken}" "${serviceToken}"
/add-ccd-role.sh "citizen" "PUBLIC" "${userToken}" "${serviceToken}"
/add-ccd-role.sh "letter-holder" "PUBLIC" "${userToken}" "${serviceToken}"

# upload definition file
/import-definition.sh "/definition.xlsx" "${userToken}" "${serviceToken}"

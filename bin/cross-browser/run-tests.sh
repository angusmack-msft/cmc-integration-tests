#!/bin/bash

set -u

COMPOSE_FILES="-f docker-compose.yml -f docker-compose.cross-browser.yml"

# Ensure Saucelabs Connect is up
SAUCELABS_CONNECT_CONTAINER_ID="$(docker-compose ${COMPOSE_FILES} ps -q saucelabs-connect)"
RETRIES=0

until docker logs ${SAUCELABS_CONNECT_CONTAINER_ID} | grep --quiet 'Sauce Connect is up, you may start your tests.'
do
  echo "Saucelabs Connect not up yet"
  sleep 10
  if [ ${RETRIES} -gt 10 ]
  then
    echo "Saucelabs Connect container not up after reaching maximum retries, exiting"
    exit 1
  else
    RETRIES=$(($RETRIES+1))
  fi
done

# Run cross-browser tests
TESTS_FAILURES="0"
CWD=$(dirname "$0")

SUPPORTED_BROWSERS=$(sed '/\/\//d' ${CWD}/../../src/config/saucelabs/supported-browsers.ts | sed '/: {/!d' | sed "s/[\'\:\{ ]//g")
SUPPORTED_BROWSERS_ARRAY=(${SUPPORTED_BROWSERS//$'\n'/ })

echo "Following browsers will be tested:"
echo "$SUPPORTED_BROWSERS"

for BROWSER in "${SUPPORTED_BROWSERS_ARRAY[@]}"
do
    echo "Testing $BROWSER"
    SAUCELABS_BROWSER="${BROWSER}" docker-compose ${COMPOSE_FILES} run --no-deps --rm integration-tests test-crossbrowser
    if [[ "${?}" -ne "0" ]]
    then
      echo "E2E tests failed on ${BROWSER}"
      TESTS_FAILURES="1"
    fi
done

if [[ "${TESTS_FAILURES}" -eq "1" ]]
then
  echo "There were test failures"
  exit 1
fi

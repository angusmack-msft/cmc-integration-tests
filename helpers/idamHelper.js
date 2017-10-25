'use strict'
/* globals codecept_helper */
const request = require('request-promise-native')
const idamBaseURL = process.env.IDAM_URL

// eslint-disable-next-line camelcase
let Helper = codecept_helper

// eslint-disable-next-line no-unused-vars
class IdamHelper extends Helper {
  createIdamUser () {
    const email = `civilmoneyclaims+${require('randomstring').generate(7)}@gmail.com`
    return request.post({
      uri: `${idamBaseURL}/testing-support/accounts`,
      body: {
        email: email,
        forename: 'john',
        surname: 'smith',
        levelOfAccess: 1,
        userGroup: {
          code: 'cmc-private-beta'
        },
        activationDate: '',
        lastAccess: '',
        password: 'Password12'
      },
      json: true
    }).then(() => email)
  }
}

module.exports = IdamHelper

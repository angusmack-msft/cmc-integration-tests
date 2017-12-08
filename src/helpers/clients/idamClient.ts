const request = require('request-promise-native')

const baseURL: string = process.env.IDAM_URL

const password = 'Password12'

export class IdamClient {

  /**
   * Creates user with default password
   *
   * @param {string} email
   * @param {string} userGroupCode
   * @returns {Promise<void>}
   */
  static createUser (email: string, userGroupCode: string): Promise<void> {
    return request.post({
      uri: `${baseURL}/testing-support/accounts`,
      body: {
        email: email,
        forename: 'John',
        surname: 'Smith',
        levelOfAccess: 1,
        userGroup: {
          code: userGroupCode
        },
        activationDate: '',
        lastAccess: '',
        password: password
      },
      json: true
    })
  }

  /**
   * Authorizes user with default password
   *
   * @param {string} email
   * @returns {Promise<string>}
   */
  static async authorizeUser (email: string): Promise<string> {
    const base64EncodedCredentials = new Buffer(`${email}:${password}`).toString('base64')

    const { 'access-token': token } = await request.post({
      uri: `${baseURL}/oauth2/authorize`,
      headers: {
        Authorization: `Basic ${base64EncodedCredentials}`
      },
      json: true
    })

    return token
  }

  /**
   * Retrieves uses details
   *
   * @param {string} jwt
   * @returns {Promise<User>}
   */
  static retrieveUser (jwt: string): Promise<User> {
    return request.get({
      uri: `${baseURL}/details`,
      headers: {
        Authorization: `Bearer ${jwt}`
      },
      json: true
    })
  }

}

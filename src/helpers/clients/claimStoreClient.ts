import * as request from 'request-promise-native'

const baseURL: string = process.env.CLAIM_STORE_URL

export class ClaimStoreClient {

  /**
   * Saves claim in the claim store
   *
   * @param {ClaimData} claimData - claim data
   * @param {User} user - claim owner
   * @returns {Promise<Claim>}
   */
  static save (claimData: ClaimData, user: User): Promise<Claim> {
    return request.post(`${baseURL}/claims/${user.id}`, {
      body: claimData,
      headers: {
        Authorization: `Bearer ${user.bearerToken}`
      },
      json: true
    })
  }
}

import { ClaimStoreClient } from 'helpers/clients/claimStoreClient'
import { IdamClient } from 'helpers/clients/idamClient'

class ClaimStoreHelper extends codecept_helper {

  async createClaim (claimData: ClaimData, userEmail: string): Promise<string> {
    const jwt: string = await IdamClient.authorizeUser(userEmail)
    const user: User = await IdamClient.retrieveUser(jwt)

    const { referenceNumber } = await ClaimStoreClient.save(claimData, { ...user, bearerToken: jwt })

    return referenceNumber
  }
}

// Node.js style export is required by CodeceptJS framework
module.exports = ClaimStoreHelper

import { PartyType } from 'data/party-type'
import { createClaimant, createClaimData, createResponseData } from 'data/test-data'
import { UserSteps } from 'tests/citizen/home/steps/user'
import { OfferSteps } from 'tests/citizen/offers/steps/offer'
import I = CodeceptJS.I

const userSteps: UserSteps = new UserSteps()
const offerSteps: OfferSteps = new OfferSteps()

Feature('Create Offers')

Scenario('I can as a defendant make an offer to the claimant @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)
  I.linkDefendantToClaim(claimRef, claimantEmail, defendantEmail)
  I.respondToClaim(claimRef, claimantEmail, createResponseData(PartyType.INDIVIDUAL), defendantEmail)

  userSteps.login(defendantEmail)
  offerSteps.makeOfferFromDashboard(claimRef)
  I.see('Your offer has been sent to ' + createClaimant(PartyType.INDIVIDUAL).name)
})

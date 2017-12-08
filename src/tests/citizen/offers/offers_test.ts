import { PartyType } from 'data/party-type'
import { createClaimant, createClaimData } from 'data/test-data'
import { Helper } from 'tests/citizen/endToEnd/steps/helper'
import { OfferSteps } from 'tests/citizen/offers/steps/offer'
import I = CodeceptJS.I

const helperSteps: Helper = new Helper()
const offerSteps: OfferSteps = new OfferSteps()

Feature('Create Offers')

Scenario('I can as a defendant make an offer to the claimant @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defendantEmail, PartyType.INDIVIDUAL)
  offerSteps.makeOfferFromDashboard(claimRef)
  I.see('Your offer has been sent to ' + createClaimant(PartyType.INDIVIDUAL).name)
})

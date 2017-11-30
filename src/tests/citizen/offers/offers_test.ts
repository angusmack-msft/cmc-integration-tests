import { PartyType } from 'data/party-type'
import { claimant, defendant } from 'data/test-data'
import { Helper } from 'tests/citizen/endToEnd/steps/helper'
import { OfferSteps } from 'tests/citizen/offers/steps/offer'
import I = CodeceptJS.I

const helperSteps: Helper = new Helper()
const offerSteps: OfferSteps = new OfferSteps()

Feature('Create Offers')

Scenario('I can as a defendant make an offer to the claimant @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()
  const claimRef: string = yield helperSteps.makeClaim(claimantEmail)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.INDIVIDUAL, defendant(defendantEmail))
  offerSteps.makeOfferFromDashboard(claimRef)
  I.see('Your offer has been sent to ' + claimant(claimantEmail).name)
})

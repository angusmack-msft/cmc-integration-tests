import { defendant, claimant } from 'data/test-data'

Feature('Create Offers')

Scenario('I can as a defendant make an offer to the claimant @citizen', function * (I, helperSteps, defenceSteps, offerSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield helperSteps.makeClaim(claimantEmail)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
  offerSteps.makeOfferFromDashboard(claimRef)
  I.see('Your offer has been sent to ' + claimant(claimantEmail).name)
})

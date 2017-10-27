import { defendant } from 'data/test-data'

Feature('Respond to claim')

Scenario('I can complete the journey', function * (I, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield helperSteps.makeClaim(claimantEmail)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

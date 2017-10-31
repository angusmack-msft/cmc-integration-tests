import { defendant } from 'data/test-data'

Feature('Respond to claim')

Scenario('I can complete the journey @citizen', function * (I, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield helperSteps.makeClaim(claimantEmail)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

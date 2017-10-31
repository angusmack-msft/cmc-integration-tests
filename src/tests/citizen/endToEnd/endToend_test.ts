import { defendant } from 'data/test-data'

Feature('E2E tests for Claim and Defence response')

// Warning : Changing the text description of this scenario, could cause failure when running ZAP security test
Scenario('I can as an Individual make a claim against an Individual Without a defendant email address and are able to pay on the Gov Pay page @citizen', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.individual, defenceSteps.defendantType.individual, false)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

Scenario('I can as Sole Trader make a claim against an Individual and are able to pay on the Gov Pay page @citizen', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.soleTrader, defenceSteps.defendantType.individual)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

Scenario('I can as a Company make a claim against an Individual and are able to pay on the Gov Pay page @citizen', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.company, defenceSteps.defendantType.individual)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

Scenario('I can as a Individual make a claim against a Company and are able to pay on the Gov Pay page @citizen @quick', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.individual, defenceSteps.defendantType.company)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.company, defendant(defendantEmail))
})

Scenario('I can as a Company make a claim against a company and are able to pay on the Gov Pay page @citizen', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.company, defenceSteps.defendantType.company)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.company, defendant(defendantEmail))
})

Scenario('I can as a Organisation make a claim against an Individual and are able to pay on the Gov Pay page @citizen', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.organisation, defenceSteps.defendantType.individual)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

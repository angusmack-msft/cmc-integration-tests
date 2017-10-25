'use strict'

Feature('E2E tests for Claim and Defence response')

const defendant = require('../../test-data').defendant

// Warning : Changing the text description of this scenario, could cause failure when running ZAP security test
Scenario('I can as an Individual make a claim against an Individual Without a defendant email address and are able to pay on the Gov Pay page', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.individual, defenceSteps.defendantType.individual, false)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

Scenario('I can as Sole Trader make a claim against an Individual and are able to pay on the Gov Pay page', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.soleTrader, defenceSteps.defendantType.individual)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

Scenario('I can as a Company make a claim against an Individual and are able to pay on the Gov Pay page', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.company, defenceSteps.defendantType.individual)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

Scenario('I can as a Individual make a claim against a Company and are able to pay on the Gov Pay page', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.individual, defenceSteps.defendantType.company)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.company, defendant(defendantEmail))
})

Scenario('I can as a Company make a claim against a company and are able to pay on the Gov Pay page', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.company, defenceSteps.defendantType.company)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.company, defendant(defendantEmail))
})

Scenario('I can as a Organisation make a claim against an Individual and are able to pay on the Gov Pay page', function * (I, claimSteps, helperSteps, defenceSteps) {
  const claimantEmail = yield I.createIdamUser()
  const defendantEmail = yield I.createIdamUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, claimSteps.claimantType.organisation, defenceSteps.defendantType.individual)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defenceSteps.defendantType.individual, defendant(defendantEmail))
})

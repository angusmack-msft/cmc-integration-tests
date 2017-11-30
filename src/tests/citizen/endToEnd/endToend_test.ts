import { PartyType } from 'data/party-type'
import { defendant } from 'data/test-data'
import { ClaimSteps } from 'tests/citizen/claim/steps/claim'
import { Helper } from 'tests/citizen/endToEnd/steps/helper'
import I = CodeceptJS.I

const claimSteps: ClaimSteps = new ClaimSteps()
const helperSteps: Helper = new Helper()

Feature('E2E tests for Claim and Defence response')

// Warning : Changing the text description of this scenario, could cause failure when running ZAP security test
Scenario('I can as an Individual make a claim against an Individual Without a defendant email address and are able to pay on the Gov Pay page @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(claimantEmail, PartyType.INDIVIDUAL, PartyType.INDIVIDUAL, false)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.INDIVIDUAL, defendant(defendantEmail))
})

Scenario('I can as Sole Trader make a claim against an Individual and are able to pay on the Gov Pay page @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail = yield I.createCitizenUser()
  const claimRef = yield claimSteps.makeAClaimAndSubmit(claimantEmail, PartyType.SOLE_TRADER, PartyType.INDIVIDUAL)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.INDIVIDUAL, defendant(defendantEmail))
})

Scenario('I can as a Company make a claim against an Individual and are able to pay on the Gov Pay page @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(claimantEmail, PartyType.COMPANY, PartyType.INDIVIDUAL)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.INDIVIDUAL, defendant(defendantEmail))
})

Scenario('I can as a Individual make a claim against a Company and are able to pay on the Gov Pay page @citizen @quick', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(claimantEmail, PartyType.INDIVIDUAL, PartyType.COMPANY)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.COMPANY, defendant(defendantEmail))
})

Scenario('I can as a Company make a claim against a company and are able to pay on the Gov Pay page @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(claimantEmail, PartyType.COMPANY, PartyType.COMPANY)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.COMPANY, defendant(defendantEmail))
})

Scenario('I can as a Organisation make a claim against an Individual and are able to pay on the Gov Pay page @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(claimantEmail, PartyType.ORGANISATION, PartyType.INDIVIDUAL)
  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(PartyType.INDIVIDUAL, defendant(defendantEmail))
})

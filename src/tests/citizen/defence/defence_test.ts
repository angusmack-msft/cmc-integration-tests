import { PartyType } from 'data/party-type'
import { createClaimData } from 'data/test-data'
import { Helper } from 'tests/citizen/endToEnd/steps/helper'
import I = CodeceptJS.I
import { DefenceType } from 'data/defence-type'

const helperSteps: Helper = new Helper()

Feature('Respond to claim')

Scenario('I can complete the journey when I fully reject the claim as I dispute the claim @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defendantEmail, PartyType.INDIVIDUAL)
})

Scenario('I can complete the journey when I fully reject the claim as I have already paid @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID)
})

Scenario('I can complete the journey when I reject part of the claim as I’ve paid what I believe I owe @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.PART_ADMISSION)
})

Scenario('I can complete the journey when I reject part of the claim as claim amount is too much @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishResponse(
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.PART_ADMISSION_BECAUSE_AMOUNT_IS_TOO_HIGH
  )
})

import { PartyType } from 'data/party-type'
import { createClaimData } from 'data/test-data'
import { Helper } from 'tests/citizen/endToEnd/steps/helper'
import I = CodeceptJS.I
import { DefenceType } from 'data/defence-type'
import { DefendantClaimDetails } from 'tests/citizen/defence/pages/defendant-claim-details'

const helperSteps: Helper = new Helper()
const defendantDetails: DefendantClaimDetails = new DefendantClaimDetails()

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

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.PART_ADMISSION_BECAUSE_BELIEVED_AMOUNT_IS_PAID)
})

Scenario('I can complete the journey when I reject part of the claim as claim amount is too much @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.PART_ADMISSION_BECAUSE_AMOUNT_IS_TOO_HIGH
  )
})

Scenario('I can see send your response by email page when I admit all of the claim @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.FULL_ADMISSION
  )
})

Scenario('I can see send your response by email page when I admit part of the claim @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.PART_ADMISSION
  )
})

Scenario('I can see send your response by email page when I reject all of the claim with counter claim @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.FULL_REJECTION_WITH_COUNTER_CLAIM
  )
})

Scenario('I can see send your response by email page when I reject all of the claim with full amount paid less than claimed amount @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID
  )
})

Scenario('I can see when did you pay page when I reject all of the claim as I’ve paid what I believe I owe @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimData: ClaimData = createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  const defendant: Party = claimData.defendants[0]
  const claimant: Party = claimData.claimants[0]

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.finishPartialResponse(claimRef, defendant, claimant,
    defendantEmail, PartyType.INDIVIDUAL,
    DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID_WITH_AMOUNT_CLAIMED
  )
})

Scenario('I can view the claim details from a link on the dashboard @citizen', function* (I: I) {
  const claimantEmail: string = yield I.createCitizenUser()
  const defendantEmail: string = yield I.createCitizenUser()

  const claimRef: string = yield I.createClaim(createClaimData(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL), claimantEmail)

  yield helperSteps.enterPinNumber(claimRef)
  helperSteps.defendantViewCaseTaskList(defendantEmail)
  defendantDetails.clickViewClaim()
  defendantDetails.checkClaimData(claimRef)
})

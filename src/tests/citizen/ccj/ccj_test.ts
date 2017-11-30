import I = CodeceptJS.I
import { PartyType } from 'data/party-type'
import { CountyCourtJudgementSteps } from 'tests/citizen/ccj/steps/ccj'

import { ClaimSteps } from 'tests/citizen/claim/steps/claim'

const claimSteps: ClaimSteps = new ClaimSteps()
const ccjSteps: CountyCourtJudgementSteps = new CountyCourtJudgementSteps()

Feature('CCJ')

Scenario('Request judgment as an individual with no defendant email and pay by instalments @citizen @quick', function* (I: I) {
  const email: string = yield I.createCitizenUser()
  const claimantType: PartyType = PartyType.INDIVIDUAL
  const defendantType: PartyType = PartyType.INDIVIDUAL
  const hasDefendantEmail = false
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType, hasDefendantEmail)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayByInstalments()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Scenario('Request judgment as a Company, pay by set date @citizen', function* (I: I) {
  const email: string = yield I.createCitizenUser()
  const claimantType: PartyType = PartyType.COMPANY
  const defendantType: PartyType = PartyType.COMPANY
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayBySetDate()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Scenario('Request judgment as a sole trader, pay immediately @citizen', function* (I: I) {
  const email: string = yield I.createCitizenUser()
  const claimantType: PartyType = PartyType.SOLE_TRADER
  const defendantType: PartyType = PartyType.ORGANISATION
  const claimRef: string = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayImmediately()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

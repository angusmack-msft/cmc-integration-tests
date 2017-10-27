Feature('CCJ')

Scenario('Request judgment as an individual with no defendant email and pay by installments', function * (I, claimSteps, defenceSteps, ccjSteps) {
  const email = yield I.createIdamUser()
  const hasDefendantEmail = false
  const claimantType = claimSteps.claimantType.individual
  const defendantType = defenceSteps.defendantType.individual
  const claimRef = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType, hasDefendantEmail)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayByInstallments()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Scenario('Request judgment as a Company, pay by set date', function * (I, claimSteps, defenceSteps, ccjSteps) {
  const email = yield I.createIdamUser()
  const claimantType = claimSteps.claimantType.company
  const defendantType = defenceSteps.defendantType.company
  const claimRef = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayBySetDate()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Scenario('Request judgment as a sole trader, pay immediately', function * (I, claimSteps, defenceSteps, ccjSteps) {
  const email = yield I.createIdamUser()
  const claimantType = claimSteps.claimantType.soleTrader
  const defendantType = defenceSteps.defendantType.organisation
  const claimRef = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayImmediately()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Feature('CCJ')

Scenario('Request judgment as an individual with no defendant email and pay by installments @citizen @quick', function * (I, claimSteps, defenceSteps, ccjSteps) {
  const email = yield I.createCitizenUser()
  const hasDefendantEmail = false
  const claimantType = claimSteps.claimantType.individual
  const defendantType = defenceSteps.defendantType.individual
  const claimRef = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType, hasDefendantEmail)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayByInstallments()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Scenario('Request judgment as a Company, pay by set date @citizen', function * (I, claimSteps, defenceSteps, ccjSteps) {
  const email = yield I.createCitizenUser()
  const claimantType = claimSteps.claimantType.company
  const defendantType = defenceSteps.defendantType.company
  const claimRef = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayBySetDate()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

Scenario('Request judgment as a sole trader, pay immediately @citizen', function * (I, claimSteps, defenceSteps, ccjSteps) {
  const email = yield I.createCitizenUser()
  const claimantType = claimSteps.claimantType.soleTrader
  const defendantType = defenceSteps.defendantType.organisation
  const claimRef = yield claimSteps.makeAClaimAndSubmit(email, claimantType, defendantType)
  ccjSteps.requestCCJ(claimRef, defendantType)
  ccjSteps.ccjDefendantToPayImmediately()
  ccjSteps.checkCCJFactsAreTrueAndSubmit(claimantType, defendantType)
  I.see('County Court Judgment requested', 'h1.bold-large')
})

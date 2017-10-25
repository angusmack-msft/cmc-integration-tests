'use strict'

Feature('Test pay issue fee with card cancel / declined')

Scenario('I can enter details on the Gov Pay page and cancel / decline payment', function * (I, claimSteps, defenceSteps, paymentSteps) {
  const email = yield I.createIdamUser()

  claimSteps.makeAClaimAndSubmitStatementOfTruth(
    email,
    claimSteps.claimantType.individual,
    defenceSteps.defendantType.individual
  )
  paymentSteps.enterWorkingCard()
  paymentSteps.cancelPaymentFromConfirmationPage()
  I.waitForText('Your payment has been cancelled')
  paymentSteps.goBackToServiceFromConfirmationPage()

  I.waitForText('Check your answers before submitting your claim')

  claimSteps.checkClaimFactsAreTrueAndSubmit()
  paymentSteps.payWithDeclinedCard()
  I.waitForText('Your payment has been declined')
  paymentSteps.goBackToServiceFromConfirmationPage()
  I.waitForText('Check your answers before submitting your claim')
})

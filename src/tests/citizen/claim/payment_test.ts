import I = CodeceptJS.I
import { PartyType } from 'data/party-type'
import { ClaimSteps } from 'tests/citizen/claim/steps/claim'
import { PaymentSteps } from 'tests/citizen/claim/steps/payment'

const claimSteps: ClaimSteps = new ClaimSteps()
const paymentSteps: PaymentSteps = new PaymentSteps()

Feature('Test pay issue fee with card cancel / declined')

Scenario('I can enter details on the Gov Pay page and cancel / decline payment @citizen', function* (I: I) {
  const email: string = yield I.createCitizenUser()

  claimSteps.makeAClaimAndSubmitStatementOfTruth(
    email,
    PartyType.INDIVIDUAL,
    PartyType.INDIVIDUAL
  )
  paymentSteps.enterWorkingCard()
  paymentSteps.cancelPaymentFromConfirmationPage()
  I.waitForText('Your payment has been cancelled')
  paymentSteps.goBackToServiceFromConfirmationPage()

  I.waitForText('Check your answers before submitting your claim')

  claimSteps.checkClaimFactsAreTrueAndSubmit(PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  paymentSteps.payWithDeclinedCard()
  I.waitForText('Your payment has been declined')
  paymentSteps.goBackToServiceFromConfirmationPage()
  I.waitForText('Check your answers before submitting your claim')
})

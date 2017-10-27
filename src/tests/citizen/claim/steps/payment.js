'use strict'

class CardDetailsFactory {
  static createForCard (number) {
    return {
      number: number,
      expiryMonth: '12',
      expiryYear: '20',
      name: 'John Smith',
      verificationCode: '999'
    }
  }
}

const billingDetails = {
  line: '221B Baker Street',
  city: 'London',
  postcode: 'NW1 6XE'
}

const email = 'civilmoneyclaims+payment@gmail.com'

let govPaymentDetailsPage, govPaymentConfirmationPage
module.exports = {

  _init () {
    govPaymentDetailsPage = require('../pages/govpay/payment-details')
    govPaymentConfirmationPage = require('../pages/govpay/payment-confirmation')
  },

  payWithWorkingCard () {
    govPaymentDetailsPage.enterPaymentDetails(CardDetailsFactory.createForCard('4444333322221111'), billingDetails, email)
    govPaymentConfirmationPage.confirmPayment()
  },

  enterWorkingCard () {
    govPaymentDetailsPage.enterPaymentDetails(CardDetailsFactory.createForCard('4444333322221111'), billingDetails, email)
  },

  payWithDeclinedCard () {
    govPaymentDetailsPage.enterPaymentDetails(CardDetailsFactory.createForCard('4000000000000002'), billingDetails, email)
  },

  cancelPaymentFromDetailsPage () {
    govPaymentDetailsPage.cancelPayment()
    govPaymentConfirmationPage.goBackToService()
  },

  cancelPaymentFromConfirmationPage () {
    govPaymentConfirmationPage.cancelPayment()
  },

  goBackToServiceFromConfirmationPage () {
    govPaymentConfirmationPage.goBackToService()
  }
}

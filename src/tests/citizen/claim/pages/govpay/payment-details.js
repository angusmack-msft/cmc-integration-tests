'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    card: {
      number: '#card-no',
      expiryDate: {
        month: '#expiry-month',
        year: '#expiry-year'
      },
      name: '#cardholder-name',
      verificationCode: '#cvc'
    },
    address: {
      line1: '#address-line-1',
      city: '#address-city',
      postcode: '#address-postcode'
    },
    email: '#email'
  },

  open () {
    I.amOnPage('/claim/pay')
  },

  enterPaymentDetails (cardDetails, billingDetails, email) {
    I.waitForText('Enter card details')
    I.fillField(this.fields.card.number, cardDetails.number)
    I.fillField(this.fields.card.expiryDate.month, cardDetails.expiryMonth)
    I.fillField(this.fields.card.expiryDate.year, cardDetails.expiryYear)
    I.fillField(this.fields.card.name, cardDetails.name)
    I.fillField(this.fields.card.verificationCode, cardDetails.verificationCode)
    I.fillField(this.fields.address.line1, billingDetails.line)
    I.fillField(this.fields.address.city, billingDetails.city)
    I.fillField(this.fields.address.postcode, billingDetails.postcode)
    I.fillField(this.fields.email, email)
    this.submitCardDetailsForm()
  },

  submitCardDetailsForm () {
    I.executeScript(function () {
      document.getElementById('card-details').submit()
    })
  },

  cancelPayment () {
    I.waitForText('Enter card details')
    I.click('Cancel payment')
  }
}

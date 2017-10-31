'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    phoneNumber: 'input[id=phoneNumber]',
    email: 'input[id=email]',
    dxAddress: 'input[id=dxAddress]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  data: {
    phoneNumberText: '0700000000',
    emailText: 'vivred@mailinator.com',
    dxAddressText: 'DX123'
  },

  open () {
    I.amOnLegalAppPage('/claim/representative-contacts')
  },

  enterYourOrganisationContactDetails () {
    I.fillField(this.fields.phoneNumber, this.data.phoneNumberText)
    I.fillField(this.fields.email, this.data.emailText)
    I.fillField(this.fields.dxAddress, this.data.dxAddressText)
    I.click(this.buttons.saveAndContinue)
  },

  verifyContactDetails () {
    I.seeInField(this.fields.phoneNumber, this.data.phoneNumberText)
    I.seeInField(this.fields.email, this.data.emailText)
    I.seeInField(this.fields.dxAddress, this.data.dxAddressText)
  },

  checkPhoneNumberLengthValidation () {
    I.fillField(this.fields.phoneNumber, '070000000000')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid phone number')
    I.fillField(this.fields.phoneNumber, '070000000')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter a valid phone number')
  },

  checkEmptyOrInvalidPhoneNumberValidation () {
    I.fillField(this.fields.phoneNumber, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid phone number')
    I.fillField(this.fields.phoneNumber, '0000000000')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid phone number')
  },

  checkForEmailFormatErrorMessage () {
    I.fillField(this.fields.email, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid email address')
    I.fillField(this.fields.email, 'vivred@mailiantor')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid email address')
    I.fillField(this.fields.email, 'vivred.com')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid email address')
  }
}

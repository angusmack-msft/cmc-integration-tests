'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    useDefendantsAddress: 'input[id=defendantsAddressYES]',
    useAnotherAddress: 'input[id=defendantsAddressNO]',
    addressLine1: 'input[id=line1]',
    addressLine2: 'input[id=line2]',
    cityName: 'input[id=city]',
    postcode: 'input[id=postcode]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnLegalAppPage('/claim/defendant-service-address')
  },

  enterAnotherServiceAddress () {
    I.checkOption(this.fields.useAnotherAddress)
    I.fillField(this.fields.addressLine1, 'CMC T2')
    I.fillField(this.fields.addressLine2, 'Westminster')
    I.fillField(this.fields.cityName, 'London')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveAndContinue)
  },
  useDefendantAddressAsServiceAddress () {
    I.checkOption(this.fields.useDefendantsAddress)
    I.see('CMC T2 DEFENDANT WESTMINSTER LONDON SW1H 9BJ')
    I.click(this.buttons.saveAndContinue)
  },

  checkForPostCodeLengthMessage () {
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
    I.fillField(this.fields.addressLine1, 'MOJ')
    I.fillField(this.fields.postcode, 'SW1H 9AJ1')
    I.click(this.buttons.saveAndContinue)
    I.see('You’ve entered too many characters')
  },

  checkForAddressLineLength () {
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
    I.fillField(this.fields.addressLine1, 'a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveAndContinue)
    I.see('You’ve entered too many characters')
  }
}

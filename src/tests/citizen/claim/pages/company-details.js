'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    name: 'input[id=name]',
    contactPerson: 'input[id=contactPerson]',
    address: {
      line1: 'input[id="address[line1]"]',
      line2: 'input[id="address[line2]"]',
      city: 'input[id="address[city]"]',
      postcode: 'input[id="address[postcode]"]'
    },
    hasCorrespondenceAddress: 'input[id=hasCorrespondenceAddresstrue]',
    correspondenceAddress: {
      line1: 'input[id="correspondenceAddress[line1]"]',
      line2: 'input[id="correspondenceAddress[line2]"]',
      city: 'input[id="correspondenceAddress[city]"]',
      postcode: 'input[id="correspondenceAddress[postcode]"]'
    }
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnCitizenAppPage(`/claim/${type}-individual-details`)
  },
  enterContactPerson (contactPerson) {
    I.fillField(this.fields.contactPerson, contactPerson)
  },
  enterCompanyName (name) {
    I.fillField(this.fields.name, name)
  },

  enterAddress (address) {
    I.fillField(this.fields.address.line1, address.line1)
    I.fillField(this.fields.address.line2, address.line2)
    I.fillField(this.fields.address.postcode, address.postcode)
    I.fillField(this.fields.address.city, address.city)
  },

  enterAddresses (address, correspondenceAddress) {
    I.fillField(this.fields.address.line1, address.line1)
    I.fillField(this.fields.address.line2, address.line2)
    I.fillField(this.fields.address.city, address.city)
    I.fillField(this.fields.address.postcode, address.postcode)

    I.checkOption(this.fields.hasCorrespondenceAddress)

    I.fillField(this.fields.correspondenceAddress.line1, correspondenceAddress.line1)
    I.fillField(this.fields.correspondenceAddress.line2, correspondenceAddress.line2)
    I.fillField(this.fields.correspondenceAddress.city, correspondenceAddress.city)
    I.fillField(this.fields.correspondenceAddress.postcode, correspondenceAddress.postcode)
  },

  submit () {
    I.click(this.buttons.submit)
  }

}

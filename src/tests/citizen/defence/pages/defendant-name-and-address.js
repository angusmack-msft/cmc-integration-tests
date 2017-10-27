'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    name: 'input[id=name]',
    addressLine1: 'input[id="address[line1]"]',
    addressLine2: 'input[id="address[line2]"]',
    addressCity: 'input[id="address[city]"]',
    postcode: 'input[id="address[postcode]"]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  enterName (name) {
    I.fillField(this.fields.name, name)
  },

  enterAddress (address) {
    I.fillField(this.fields.addressLine1, address.line1)
    I.fillField(this.fields.addressLine2, address.line2)
    I.fillField(this.fields.addressCity, address.city)
    I.fillField(this.fields.postcode, address.postcode)

    I.click(this.buttons.submit)
  }
}

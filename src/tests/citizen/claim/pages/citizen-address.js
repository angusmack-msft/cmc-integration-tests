'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    address: {
      line1: 'input[id="line1"]',
      line2: 'input[id="line2"]',
      city: 'input[id="city"]',
      postcode: 'input[id="postcode"]'
    }
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnCitizenAppPage(`/claim/${type}-address`)
  },

  enterAddress (address) {
    I.fillField(this.fields.address.line1, address.line1)
    I.fillField(this.fields.address.line2, address.line2)
    I.fillField(this.fields.address.city, address.city)
    I.fillField(this.fields.address.postcode, address.postcode)

    I.click(this.buttons.submit)
  }
}

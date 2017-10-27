'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    email: 'input[id=address]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnPage('/claim/defendant-email')
  },

  enterEmail (emailAddress) {
    I.fillField(this.fields.email, emailAddress)
    I.click(this.buttons.submit)
  },

  submitForm () {
    I.click(this.buttons.submit)
  }
}

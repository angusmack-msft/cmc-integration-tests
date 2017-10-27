'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    reason: 'textarea[id=reason]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnPage('/claim/reason')
  },

  enterReason (reason) {
    I.fillField(this.fields.reason, reason)
    I.click(this.buttons.submit)
  }
}

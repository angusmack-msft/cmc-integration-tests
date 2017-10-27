'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    amount: 'todo, for future use'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnPage('/claim/total')
  },

  // to be used in the future.
  getTotalAmount () {
    I.grabTextFrom(this.fields.amount)
  },

  continue () {
    I.click(this.buttons.submit)
  }
}

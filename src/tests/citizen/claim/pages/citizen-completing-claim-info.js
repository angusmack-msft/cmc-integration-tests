'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open () {
    I.amOnPage('/claim/completing-claim')
  },

  confirmRead () {
    I.click(this.buttons.submit)
  }
}

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

  rejectMoneyClaim () {
    I.checkOption('I reject all of the claim')
    I.click(this.buttons.submit)
  }
}

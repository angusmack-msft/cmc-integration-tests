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
    I.amOnCitizenAppPage('/first-contact/claim-summary')
  },

  clickRespondToClaim () {
    I.click(this.buttons.submit)
  }
}

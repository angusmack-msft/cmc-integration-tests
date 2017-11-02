'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    startNow: 'a.button.button-start'
  },

  open () {
    I.amOnCitizenAppPage('/claim/start')
  },

  startClaim () {
    I.click(this.buttons.startNow)
  }
}
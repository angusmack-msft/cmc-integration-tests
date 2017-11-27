'use strict'
/* global actor */

let I

module.exports = {
  _init () {
    I = actor()
  },

  buttons: {
    continueButton: 'a[class="button"]'
  },

  clickContinue () {
    I.click(this.buttons.continueButton)
  }
}

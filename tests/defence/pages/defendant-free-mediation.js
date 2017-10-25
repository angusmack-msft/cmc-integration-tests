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

  chooseYes () {
    I.checkOption('Yes, I want help to resolve this dispute')
    I.click(this.buttons.submit)
  }
}

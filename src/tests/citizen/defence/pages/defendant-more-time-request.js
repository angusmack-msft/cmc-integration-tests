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
    I.checkOption('Yes, I need an extra 14 days')
    I.click(this.buttons.submit)
  }
}

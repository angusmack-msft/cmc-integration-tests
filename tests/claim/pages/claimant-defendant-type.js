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
    I.amOnPage('/claim/defendant-type')
  },

  chooseIndividual () {
    I.checkOption('Individual')
    I.click(this.buttons.submit)
  }
}

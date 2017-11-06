'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    claimFee: 'table > tbody > tr:nth-child(0) > td:nth-child(0).numeric'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open () {
    I.amOnCitizenAppPage('/claim/before-you-start/cost')
  },

  getClaimFee () {
    I.grabTextFrom(this.fields.claimFee)
    I.click(this.buttons.submit)
  },

  continue () {
    I.click(this.buttons.submit)
  }
}

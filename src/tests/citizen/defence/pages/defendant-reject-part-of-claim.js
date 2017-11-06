'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    claimTooMuch: 'input[id=optionamountTooHigh]',
    paidWhatBelievedWasOwed: 'input[id=optionpaidWhatBelievedWasOwed]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  rejectClaimTooMuch () {
    I.checkOption(this.fields.claimTooMuch)
    I.click(this.buttons.submit)
  },

  rejectClaimPaidWhatIBelieveIOwe () {
    I.checkOption(this.fields.paidWhatBelievedWasOwed)
    I.click(this.buttons.submit)
  }
}

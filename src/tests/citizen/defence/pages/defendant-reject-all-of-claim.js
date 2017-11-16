'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    dispute: 'input[id=optiondispute]',
    alreadyPaid: 'input[id=optionalreadyPaid]',
    counterClaim: 'input[id=optioncounterClaim]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  disputeTheClaim () {
    I.checkOption(this.fields.dispute)
    I.click(this.buttons.submit)
  },

  alreadyPaid () {
    I.checkOption(this.fields.alreadyPaid)
    I.click(this.buttons.submit)
  }
}

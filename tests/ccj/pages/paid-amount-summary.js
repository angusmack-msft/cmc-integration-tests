'use strict'
/* global actor */

let I
let amountOutstanding
let claimSteps

module.exports = {

  _init () {
    I = actor()
    claimSteps = require('../../claim/steps/claim')
  },

  buttons: {
    submit: 'a.button'
  },

  // to be used in the future.
  checkAmounts (defendantPaidAmount) {
    amountOutstanding = claimSteps.getTotalClaimAmount() - defendantPaidAmount
    amountOutstanding = amountOutstanding.toFixed(2)
    I.see('Amount to be paid by defendant')
    I.see('Minus amount already paid £' + defendantPaidAmount.toFixed(2).toString())
    I.see('Total £' + amountOutstanding.toString())
  },

  continue () {
    I.click(this.buttons.submit)
  }
}

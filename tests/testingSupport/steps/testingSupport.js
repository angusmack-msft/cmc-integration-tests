'use strict'

let I
let updateResponseDeadline = require('../pages/update-response-deadline')

module.exports = {

  _init () {
    I = actor()
  },

  makeClaimAvailableForCCJ (claimRef) {
    I.click('Testing support')
    I.click('Update response deadline')
    updateResponseDeadline.updateDeadline(claimRef, {day: '1', month: '1', year: '2000'})
  }
}

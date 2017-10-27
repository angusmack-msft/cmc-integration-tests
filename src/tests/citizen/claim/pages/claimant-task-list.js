'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
  },

  open () {
    I.amOnPage('/claim/task-list')
  },

  selectTaskResolvingThisDispute () {
    I.click('Resolving this dispute')
  },

  selectTaskCompletingYourClaim () {
    I.click('Completing your claim')
  },

  selectTaskYourDetails () {
    I.click('Your details')
  },

  selectTaskTheirDetails () {
    I.click('Their details')
  },

  selectTaskClaimAmount () {
    I.click('Claim amount')
  },

  selectTaskClaimDetails () {
    I.click('Claim details')
  },

  selectTaskCheckAndSubmitYourClaim () {
    I.click('Check and submit your claim')
  }
}

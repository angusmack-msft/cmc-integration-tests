'use strict'

let dashboardPage,
  claimantPage,
  I

module.exports = {

  _init () {
    I = actor()
    dashboardPage = require('../pages/dashboard')
    claimantPage = require('../pages/claimant')
  },

  startCCJ (claimRef) {
    I.click('My account')
    dashboardPage.selectClaim(claimRef)
    claimantPage.clickRequestCCJ()
  }
}

'use strict'
/* global actor */

const verifyPageData = require('../../../../data/legal-test-data').verifyPageData
let I

module.exports = {

  _init () {
    I = actor()
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnLegalAppPage('/dashboard/claim-details')
  },
  verifyClaimDetails (legalClaimNumber) {
    I.see(legalClaimNumber)
    I.see(verifyPageData.claimantName)
    I.see(verifyPageData.defendantOrganization)
    I.see(verifyPageData.organizationRefNumber)
  }
}

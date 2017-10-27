'use strict'

let claimantInterestPage,
  claimantInterestDatePage,
  claimantInterestTotalPage

module.exports = {

  _init () {
    claimantInterestPage = require('../pages/claimant-interest')
    claimantInterestDatePage = require('../pages/claimant-interest-date')
    claimantInterestTotalPage = require('../pages/claimant-interest-total')
  },

  skipClaimInterest () {
    claimantInterestPage.selectNoClaimInterest()
  },

  enterDefaultInterest () {
    claimantInterestPage.selectStandardRate()
    claimantInterestDatePage.selectDefaultDate()
  },

  enterSpecificInterestRateAndDate (rate, date) {
    claimantInterestPage.selectDifferentRate(rate)
    claimantInterestDatePage.selectParticularDate(date.day, date.month, date.year)
  },

  skipClaimantInterestTotalPage () {
    claimantInterestTotalPage.continue()
  }
}

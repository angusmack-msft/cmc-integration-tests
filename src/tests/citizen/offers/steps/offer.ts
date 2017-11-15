import * as testData from 'data/test-data'
const defendant = testData.defendant('civilmoneyclaims+notused@gmail.com')

let I
let defendantOfferPage

module.exports = {

  _init () {
    I = actor()

    defendantOfferPage = require('../pages/defendant-offer')
  },

  makeOffer () {
    defendantOfferPage.enterOffer(defendant.offer.offerText, defendant.offer.dateOfcompletionDate)
  },

  makeOfferFromDashboard (claimRef) {
    I.click('My account')
    I.see('Your money claims account')
    I.click(claimRef)
    I.click('make an offer')
    this.makeOffer()
  }

}

'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    offerText: 'textarea[id=offerText]',
    completionOfferDate: {
      day: "input[id='completionDate[day]']",
      month: "input[id='completionDate[month]']",
      year: "input[id='completionDate[year]']"
    }
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  enterOffer (offerText, date) {
    I.see('Make an offer')
    I.fillField(this.fields.offerText, offerText)
    I.fillField(this.fields.completionOfferDate.day, date.day)
    I.fillField(this.fields.completionOfferDate.month, date.month)
    I.fillField(this.fields.completionOfferDate.year, date.year)
    I.click(this.buttons.submit)
  }
}

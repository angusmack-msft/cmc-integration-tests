'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  links: {
    goBack: '#return-url'
  },

  confirmPayment () {
    I.waitForText('Confirm your payment')
    I.click('Confirm payment')
  },

  cancelPayment () {
    I.waitForText('Confirm your payment')
    I.click('Cancel payment')
  },

  goBackToService () {
    I.click(this.links.goBack)
  }
}

'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    reason1: 'input[id="rows[0][reason]"]',
    reason2: 'input[id="rows[1][reason]"]',
    reason3: 'input[id="rows[2][reason]"]',
    amount1: 'input[id="rows[0][amount]"]',
    amount2: 'input[id="rows[1][amount]"]',
    amount3: 'input[id="rows[2][amount]"]',
    calculate: 'input.link-button.calculate',
    totalSum: 'span#totalSum'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open () {
    I.amOnPage('/claim/amount')
  },

  enterAmount (amount1, amount2, amount3) {
    I.fillField(this.fields.reason1, 'Claim value')
    I.fillField(this.fields.amount1, amount1)
    I.fillField(this.fields.reason2, 'Cost of legal help')
    I.fillField(this.fields.amount2, amount2)
    I.fillField(this.fields.reason3, 'Extra admin fees')
    I.fillField(this.fields.amount3, amount3)
  },

  calculateTotal () {
    I.click(this.fields.calculate)
  },

  getClaimTotal () {
    I.grabTextFrom(this.fields.totalSum)
  },

  continue () {
    I.click('Save and continue')
  }
}

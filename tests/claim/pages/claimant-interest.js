'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    typeStandard: 'input[id=typestandard]',
    typeDifferent: 'input[id=typedifferent]',
    typeNoClaim: 'input[id=typenointerest]',

    rate: 'input[id="rate[label]"]',
    reason: 'input[id="reason[label]"]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectStandardRate () {
    I.checkOption(this.fields.typeStandard)
    I.click(this.buttons.submit)
  },

  selectDifferentRate (rate) {
    I.checkOption(this.fields.typeDifferent)
    I.fillField(this.fields.rate, rate)
    I.fillField(this.fields.reason, 'Because I want to')
    I.click(this.buttons.submit)
  },

  selectNoClaimInterest () {
    I.checkOption(this.fields.typeNoClaim)
    I.click(this.buttons.submit)
  }
}

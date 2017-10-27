'use strict'

let I, claimSteps

module.exports = {

  _init () {
    I = actor()
    claimSteps = require('../../claim/steps/claim')
  },

  fields: {
    defendantPaidSomeMoney: {
      yes: 'input[id=optionyes]',
      no: 'input[id=optionno]'
    },

    paidAmount: 'input[id=amount]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  paidSome () {
    I.checkOption(this.fields.defendantPaidSomeMoney.yes)
  },

  notPaidSome () {
    I.checkOption(this.fields.defendantPaidSomeMoney.no)
  },

  amountPaid (amountpaid) {
    I.fillField(this.fields.paidAmount, amountpaid)
  },

  defendantPaid (amount) {
    this.paidSome()
    I.see('Total amount payable by the defendant is £' + claimSteps.getTotalClaimAmount().toString())
    I.fillField(this.fields.paidAmount, amount)
    I.click(this.buttons.submit)
  }
}

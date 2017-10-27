'use strict'
/* global actor */

let I
let amountOutstanding
let claimSteps

module.exports = {

  _init () {
    I = actor()
    claimSteps = require('../../claim/steps/claim')
  },
  fields: {
    repayment: {
      firstPayment: 'input[id=firstPayment]',
      equalInstalments: 'input[id=installmentAmount]',
      firstPaymentDate: {
        day: "input[id='firstPaymentDate[day]']",
        month: "input[id='firstPaymentDate[month]']",
        year: "input[id='firstPaymentDate[year]']"
      },
      frequency: {
        everyWeek: 'input[id=paymentScheduleEACH_WEEK]',
        everyTwoWeeks: 'input[id=paymentScheduleEVERY_TWO_WEEKS]',
        everyMonth: 'input[id=paymentScheduleEVERY_MONTH]'
      }
    }
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  checkOutstandingAmount (defendantPaidAmount) {
    amountOutstanding = claimSteps.getTotalClaimAmount() - defendantPaidAmount
    amountOutstanding = amountOutstanding.toFixed(2)
    I.see('Total amount payable by the defendant is £' + amountOutstanding.toString())
  },

  enterRepaymentPlan (plan) {
    I.fillField(this.fields.repayment.firstPayment, plan.firstPayment)
    I.fillField(this.fields.repayment.equalInstalments, plan.equalInstallment)
    I.fillField(this.fields.repayment.firstPaymentDate.day, plan.firstPaymentDate.day)
    I.fillField(this.fields.repayment.firstPaymentDate.month, plan.firstPaymentDate.month)
    I.fillField(this.fields.repayment.firstPaymentDate.year, plan.firstPaymentDate.year)
    I.checkOption(this.fields.repayment.frequency[plan.frequency])
    I.click(this.buttons.submit)
  },

  saveAndContinue () {
    I.click(this.buttons.submit)
  }

}

import { defendant as createDefendant } from 'data/test-data'

let I
let testingSupport
let dashboardSteps
let claimSteps
let defenceSteps
let ccjDateOfBirthPage
let ccjDefendantPaidAnyMoneyPage
let ccjPaidAmountSummary
let ccjPaymentOptionsPage
let ccjDefendantPaidByInstalmentsPage
let ccjDefendantPayBySetDatePage
let ccjCheckAndSendPage

const ccjRepaymentPlan = {
  firstPayment: '50',
  equalInstalment: '20',
  firstPaymentDate: { day: '1', month: '1', year: '2025' },
  frequency: 'everyWeek'}
const paymentBySetDate = { day: '1', month: '1', year: '2025' }
const defendant = createDefendant('civilmoneyclaims+adefendant@gmail.com')
const defendantPaidAmount = 35.50

module.exports = {

  _init () {
    I = actor()
    ccjDateOfBirthPage = require('../../claim/pages/citizen-dob')
    ccjDefendantPaidAnyMoneyPage = require('../pages/defendant-paid-any-money')
    ccjPaidAmountSummary = require('../pages/paid-amount-summary')
    ccjPaymentOptionsPage = require('../pages/payment-options')
    ccjDefendantPaidByInstalmentsPage = require('../pages/defendant-pay-by-instalments')
    ccjDefendantPayBySetDatePage = require('../pages/defendant-pay-by-set-date')
    ccjCheckAndSendPage = require('../pages/ccj-check-and-send')
    testingSupport = require('../../testingSupport/steps/testingSupport')
    dashboardSteps = require('../../dashboard/steps/dashboard')
    claimSteps = require('../../claim/steps/claim')
    defenceSteps = require('../../defence/steps/defence')
  },

  requestCCJ (claimRef, defendantType) {
    testingSupport.makeClaimAvailableForCCJ(claimRef)
    dashboardSteps.startCCJ(claimRef)
    if (defendantType === defenceSteps.defendantType.individual) {
      I.see('Defendant’s date of birth')
      I.click('input[id=knowntrue]')
      ccjDateOfBirthPage.enterDOB(defendant.dateOfBirth)
    }
    I.see('Has the defendant paid some of the amount owed?')
    ccjDefendantPaidAnyMoneyPage.defendantPaid(defendantPaidAmount.toFixed(2).toString())
    ccjPaidAmountSummary.checkAmounts(defendantPaidAmount)
    ccjPaidAmountSummary.continue()
  },

  ccjDefendantToPayByInstalments () {
    ccjPaymentOptionsPage.chooseInstalments()
    ccjDefendantPaidByInstalmentsPage.checkOutstandingAmount(defendantPaidAmount)
    ccjDefendantPaidByInstalmentsPage.enterRepaymentPlan(ccjRepaymentPlan)
  },

  ccjDefendantToPayBySetDate () {
    ccjPaymentOptionsPage.chooseFullBySetDate()
    ccjDefendantPayBySetDatePage.paymentBySetDate(paymentBySetDate)
  },

  ccjDefendantToPayImmediately () {
    ccjPaymentOptionsPage.chooseImmediately()
  },

  checkCCJFactsAreTrueAndSubmit (claimantType, defendantType) {
    ccjCheckAndSendPage.verifyCheckAndSendAnswers(defendant, defendantType, defendantPaidAmount, defendant.address)

    if (claimantType === claimSteps.claimantType.company || claimantType === claimSteps.claimantType.organisation) {
      ccjCheckAndSendPage.signStatementOfTruthAndSubmit('Mr CCJ submitter', 'Director')
    } else {
      ccjCheckAndSendPage.checkFactsTrueAndSubmit()
    }
  }
}

import { PartyType } from 'data/party-type'
import { defendant as createDefendant } from 'data/test-data'
import { CountyCourtJudgementCheckAndSendPage } from 'tests/citizen/ccj/pages/ccj-check-and-send'
import { DefendantPaidAnyMoneyPage } from 'tests/citizen/ccj/pages/defendant-paid-any-money'
import { DefendantPayByInstalmentsPage } from 'tests/citizen/ccj/pages/defendant-pay-by-instalments'
import { DefendantPayBySetDatePage } from 'tests/citizen/ccj/pages/defendant-pay-by-set-date'
import { PaidAmountSummaryPage } from 'tests/citizen/ccj/pages/paid-amount-summary'
import { PaymentOptionsPage } from 'tests/citizen/ccj/pages/payment-options'
import { CitizenDobPage } from 'tests/citizen/claim/pages/citizen-dob'
import { DashboardSteps } from 'tests/citizen/dashboard/steps/dashboard'
import { TestingSupportSteps } from 'tests/citizen/testingSupport/steps/testingSupport'
import I = CodeceptJS.I

const I: I = actor()
const testingSupport: TestingSupportSteps = new TestingSupportSteps()
const dashboardSteps: DashboardSteps = new DashboardSteps()
const ccjDateOfBirthPage: CitizenDobPage = new CitizenDobPage()
const ccjDefendantPaidAnyMoneyPage: DefendantPaidAnyMoneyPage = new DefendantPaidAnyMoneyPage()
const ccjPaidAmountSummary: PaidAmountSummaryPage = new PaidAmountSummaryPage()
const ccjPaymentOptionsPage: PaymentOptionsPage = new PaymentOptionsPage()
const ccjDefendantPaidByInstalmentsPage: DefendantPayByInstalmentsPage = new DefendantPayByInstalmentsPage()
const ccjDefendantPayBySetDatePage: DefendantPayBySetDatePage = new DefendantPayBySetDatePage()
const ccjCheckAndSendPage: CountyCourtJudgementCheckAndSendPage = new CountyCourtJudgementCheckAndSendPage()

const ccjRepaymentPlan = {
  firstPayment: 50.00,
  equalInstalment: 20.00,
  firstPaymentDate: {
    day: '1',
    month: '1',
    year: '2025'
  },
  frequency: 'everyWeek'
}
const paymentBySetDate = {
  day: '1',
  month: '1',
  year: '2025'
}
const defendant = createDefendant('civilmoneyclaims+adefendant@gmail.com')
const defendantPaidAmount = 35.50

export class CountyCourtJudgementSteps {

  requestCCJ (claimRef: string, defendantType: PartyType): void {
    testingSupport.makeClaimAvailableForCCJ(claimRef)
    dashboardSteps.startCCJ(claimRef)
    if (defendantType === PartyType.INDIVIDUAL) {
      I.see('Defendant’s date of birth')
      I.click('input[id=knowntrue]')
      ccjDateOfBirthPage.enterDOB(defendant.dateOfBirth)
    }
    I.see('Has the defendant paid some of the amount owed?')
    ccjDefendantPaidAnyMoneyPage.defendantPaid(defendantPaidAmount)
    ccjPaidAmountSummary.checkAmounts(defendantPaidAmount)
    ccjPaidAmountSummary.continue()
  }

  ccjDefendantToPayByInstalments (): void {
    ccjPaymentOptionsPage.chooseInstalments()
    ccjDefendantPaidByInstalmentsPage.checkOutstandingAmount(defendantPaidAmount)
    ccjDefendantPaidByInstalmentsPage.enterRepaymentPlan(ccjRepaymentPlan)
  }

  ccjDefendantToPayBySetDate (): void {
    ccjPaymentOptionsPage.chooseFullBySetDate()
    ccjDefendantPayBySetDatePage.paymentBySetDate(paymentBySetDate)
  }

  ccjDefendantToPayImmediately (): void {
    ccjPaymentOptionsPage.chooseImmediately()
  }

  checkCCJFactsAreTrueAndSubmit (claimantType: PartyType, defendantType: PartyType): void {
    ccjCheckAndSendPage.verifyCheckAndSendAnswers(defendant, defendantType, defendantPaidAmount, defendant.address)

    if (claimantType === PartyType.COMPANY || claimantType === PartyType.ORGANISATION) {
      ccjCheckAndSendPage.signStatementOfTruthAndSubmit('Mr CCJ submitter', 'Director')
    } else {
      ccjCheckAndSendPage.checkFactsTrueAndSubmit()
    }
  }
}

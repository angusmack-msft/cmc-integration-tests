import { DEFAULT_PASSWORD, createDefendant, defence } from 'data/test-data'
import { request } from 'helpers/clients/base/request'
import { DefendantCheckAndSendPage } from 'tests/citizen/defence/pages/defendant-check-and-send'
import { DefendantDefenceTypePage } from 'tests/citizen/defence/pages/defendant-defence-type'
import { DefendantDobPage } from 'tests/citizen/defence/pages/defendant-dob'
import { DefendantEnterClaimPinNumberPage } from 'tests/citizen/defence/pages/defendant-enter-claim-pin-number'
import { DefendantEnterClaimReferencePage } from 'tests/citizen/defence/pages/defendant-enter-claim-reference'
import { DefendantFreeMediationPage } from 'tests/citizen/defence/pages/defendant-free-mediation'
import { DefendantHowMuchHaveYouPaidPage } from 'tests/citizen/defence/pages/defendant-how-much-have-you-paid'
import { DefendantHowMuchYouOwePage } from 'tests/citizen/defence/pages/defendant-how-much-you-owe'
import { DefendantImpactOfDisputePage } from 'tests/citizen/defence/pages/defendant-impact-of-dispute'
import { DefendantMobilePage } from 'tests/citizen/defence/pages/defendant-mobile'
import { DefendantMoreTimeConfirmationPage } from 'tests/citizen/defence/pages/defendant-more-time-confirmation'
import { DefendantMoreTimeRequestPage } from 'tests/citizen/defence/pages/defendant-more-time-request'
import { DefendantNameAndAddressPage } from 'tests/citizen/defence/pages/defendant-name-and-address'
import { DefendantPaymentPlanPage } from 'tests/citizen/defence/pages/defendant-payment-plan'
import { DefendantRegisterPage } from 'tests/citizen/defence/pages/defendant-register'
import { DefendantRejectAllOfClaimPage } from 'tests/citizen/defence/pages/defendant-reject-all-of-claim'
import { DefendantRejectPartOfClaimPage } from 'tests/citizen/defence/pages/defendant-reject-part-of-claim'
import { DefendantStartPage } from 'tests/citizen/defence/pages/defendant-start'
import { DefendantTimelineEventsPage } from 'tests/citizen/defence/pages/defendant-timeline-events'
import { DefendantViewClaimPage } from 'tests/citizen/defence/pages/defendant-view-claim'
import { DefendantWhenWillYouPayPage } from 'tests/citizen/defence/pages/defendant-when-will-you-pay'
import { DefendantYourDefencePage } from 'tests/citizen/defence/pages/defendant-your-defence'
import { StatementOfMeansSteps } from 'tests/citizen/defence/steps/statementOfMeans'
import { LoginPage } from 'tests/citizen/home/pages/login'
import { DefendantSteps } from 'tests/citizen/home/steps/defendant'
import I = CodeceptJS.I
import { PartyType } from 'data/party-type'
import { DefenceType } from 'data/defence-type'
import { DefendantHowMuchHaveYouPaidClaimantPage } from 'tests/citizen/defence/pages/defendant-how-much-have-you-paid-claimant'
import { DefendantWhenDidYouPayPage } from 'tests/citizen/defence/pages/defendant-when-did-you-pay'

const I: I = actor()
const defendantStartPage: DefendantStartPage = new DefendantStartPage()
const defendantEnterClaimRefPage: DefendantEnterClaimReferencePage = new DefendantEnterClaimReferencePage()
const defendantEnterPinPage: DefendantEnterClaimPinNumberPage = new DefendantEnterClaimPinNumberPage()
const defendantViewClaimPage: DefendantViewClaimPage = new DefendantViewClaimPage()
const defendantRegisterPage: DefendantRegisterPage = new DefendantRegisterPage()
const defendantNameAndAddressPage: DefendantNameAndAddressPage = new DefendantNameAndAddressPage()
const defendantDobPage: DefendantDobPage = new DefendantDobPage()
const defendantMobilePage: DefendantMobilePage = new DefendantMobilePage()
const defendantMoreTimeRequestPage: DefendantMoreTimeRequestPage = new DefendantMoreTimeRequestPage()
const defendantMoreTimeConfirmationPage: DefendantMoreTimeConfirmationPage = new DefendantMoreTimeConfirmationPage()
const defendantDefenceTypePage: DefendantDefenceTypePage = new DefendantDefenceTypePage()
const defendantRejectAllOfClaimPage: DefendantRejectAllOfClaimPage = new DefendantRejectAllOfClaimPage()
const defendantYourDefencePage: DefendantYourDefencePage = new DefendantYourDefencePage()
const defendantFreeMediationPage: DefendantFreeMediationPage = new DefendantFreeMediationPage()
const defendantCheckAndSendPage: DefendantCheckAndSendPage = new DefendantCheckAndSendPage()
const defendantHowMuchYouBelieveYouOwePage: DefendantHowMuchYouOwePage = new DefendantHowMuchYouOwePage()
const defendantHowMuchHaveYouPaidTheClaimant: DefendantHowMuchHaveYouPaidPage = new DefendantHowMuchHaveYouPaidPage()
const defendantRejectPartOfClaimPage: DefendantRejectPartOfClaimPage = new DefendantRejectPartOfClaimPage()
const defendantTimelineOfEventsPage: DefendantTimelineEventsPage = new DefendantTimelineEventsPage()
const defendantImpactOfDisputePage: DefendantImpactOfDisputePage = new DefendantImpactOfDisputePage()
const loginPage: LoginPage = new LoginPage()
const defendantPaymentPlanPage: DefendantPaymentPlanPage = new DefendantPaymentPlanPage()
const defendantWhenWillYouPage: DefendantWhenWillYouPayPage = new DefendantWhenWillYouPayPage()
const defendantSteps: DefendantSteps = new DefendantSteps()
const statementOfMeansSteps: StatementOfMeansSteps = new StatementOfMeansSteps()
const defendantHowMuchHaveYouPaidClaimantPage: DefendantHowMuchHaveYouPaidClaimantPage = new DefendantHowMuchHaveYouPaidClaimantPage()
const defendantWhenDidYouPayPage: DefendantWhenDidYouPayPage = new DefendantWhenDidYouPayPage()

class Helper {
  static getLetterHolderId (claimRef: string) {
    return request.get({
      uri: `http://claim-store-api:4400/testing-support/claims/${claimRef}`,
      resolveWithFullResponse: true,
      rejectUnauthorized: false,
      json: false
    })
  }

  static getPin (letterHolderId: string) {
    return request.get({
      uri: `http://idam-api:8080/testing-support/accounts/pin/${letterHolderId}`,
      resolveWithFullResponse: true,
      rejectUnauthorized: false,
      json: false
    })
  }
}

const updatedAddress = { line1: 'ABC Street', line2: 'A cool place', city: 'Bristol', postcode: 'AAA BCC' }

const defendantRepaymentPlan: PaymentPlan = {
  firstPayment: 50.00,
  equalInstalment: 20.00,
  firstPaymentDate: '2025-01-01',
  frequency: 'everyWeek'
}

const text = 'I owe nothing'

export class DefenceSteps {

  async getClaimPin (claimRef: string): Promise<string> {
    const claimObj = await Helper.getLetterHolderId(claimRef)

    const letterHolderId = JSON.parse(claimObj.body).letterHolderId
    const pinResponse = await Helper.getPin(letterHolderId)

    return pinResponse.body
  }

  enterClaimReference (claimRef: string): void {
    defendantStartPage.open()
    defendantStartPage.start()
    defendantEnterClaimRefPage.enterClaimReference(claimRef)
  }

  async enterClaimPin (claimRef: string): Promise<void> {
    const claimPinNumber = await this.getClaimPin(claimRef)
    defendantEnterPinPage.enterPinNumber(claimPinNumber)
  }

  respondToClaim (): void {
    I.see('Number')
    I.see('Amount')
    I.see('Reason for claim')
    defendantViewClaimPage.clickRespondToClaim()
  }

  loginAsDefendant (defendantEmail: string): void {
    defendantRegisterPage.clickLinkIAlreadyHaveAnAccount()
    loginPage.login(defendantEmail, DEFAULT_PASSWORD)
  }

  confirmYourDetails (defendantType: PartyType): void {
    const defendant: Party = createDefendant(defendantType)

    defendantSteps.selectTaskConfirmYourDetails()
    defendantNameAndAddressPage.enterAddress(updatedAddress)
    if (defendantType === PartyType.INDIVIDUAL) {
      defendantDobPage.enterDOB(defendant.dateOfBirth)
    }
    defendantMobilePage.enterMobile(defendant.mobilePhone)
  }

  requestMoreTimeToRespond (): void {
    defendantSteps.selectTaskMoreTimeNeededToRespond()
    defendantMoreTimeRequestPage.chooseYes()
    defendantMoreTimeConfirmationPage.confirm()
  }

  rejectAllOfClaimAsDisputeClaim (): void {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectMoneyClaim()
    defendantRejectAllOfClaimPage.disputeTheClaim()
  }

  rejectAllOfClaimAsAlreadyPaid (): void {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectMoneyClaim()
    defendantRejectAllOfClaimPage.alreadyPaid()
  }

  addTimeLineOfEvents (timeline: Timeline): void {
    I.see('Add your timeline of events')
    defendantTimelineOfEventsPage.enterTimelineEvent(0, timeline.events[0].date, timeline.events[0].description)
    defendantTimelineOfEventsPage.enterTimelineEvent(1, timeline.events[1].date, timeline.events[1].description)
    defendantTimelineOfEventsPage.submitForm()
  }

  explainImpactOfDispute (impactOfDispute: string): void {
    I.see('How this dispute has affected you?')
    defendantImpactOfDisputePage.enterImpactOfDispute(impactOfDispute)
    defendantImpactOfDisputePage.submitForm()
  }

  admitAllOfClaim () {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectAllOfMoneyClaim()
  }

  admitPartOfClaim () {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectPartOfMoneyClaim()
  }

  admitAllOfClaimAndMakeCounterClaim () {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectMoneyClaim()
    defendantRejectAllOfClaimPage.counterClaim()
  }

  rejectAllOfTheClaim_PaidWhatIBeleiveIOwe () {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectMoneyClaim()
    defendantRejectAllOfClaimPage.alreadyPaid()
    defendantHowMuchHaveYouPaidClaimantPage.lessThanClaimed()
  }

  rejectAllOfTheClaim_WhenDidYouPay (defence: PartialDefence) {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectMoneyClaim()
    defendantRejectAllOfClaimPage.alreadyPaid()
    defendantHowMuchHaveYouPaidClaimantPage.amountClaimed()
    defendantSteps.selectTaskWhenDidYouPay()
    defendantWhenDidYouPayPage.enterDateAndExplaination('2017-01-01', 'Paid Cash')
    I.click('Save and continue')
  }

  rejectPartOfTheClaim_PaidWhatIBelieveIOwe (defence: PartialDefence): void {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectPartOfMoneyClaim()
    defendantRejectPartOfClaimPage.rejectClaimPaidWhatIBelieveIOwe()
    I.see('Respond to a money claim')
    defendantSteps.selectTaskHowMuchPaidToClaiment()
    defendantHowMuchHaveYouPaidTheClaimant.enterAmountPaidWithDateAndExplaination(
      defence.paidWhatIBelieveIOwe.howMuchAlreadyPaid,
      defence.paidWhatIBelieveIOwe.paidDate,
      defence.paidWhatIBelieveIOwe.explanation)
    this.addTimeLineOfEvents(defence.timeline)
    I.see('List your evidence')
    I.click('Save and continue')
    this.explainImpactOfDispute(defence.impactOfDispute)
    defendantSteps.selectTaskFreeMediation()
    defendantFreeMediationPage.chooseYes()
  }

  rejectPartOfTheClaimTooMuch (defence: PartialDefence): void {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectPartOfMoneyClaim()
    defendantRejectPartOfClaimPage.rejectClaimTooMuch()
    I.see('Respond to a money claim')
    defendantSteps.selectTaskHowMuchMoneyBelieveYouOwe()
    defendantHowMuchYouBelieveYouOwePage.enterAmountOwedAndExplaination(
      defence.claimAmountIsTooMuch.howMuchIBelieveIOwe,
      defence.claimAmountIsTooMuch.explanation)
    this.addTimeLineOfEvents(defence.timeline)
    I.see('List your evidence')
    I.click('Save and continue')
    this.explainImpactOfDispute(defence.impactOfDispute)
    defendantSteps.selectTaskWhenWillYouPay()
    defendantWhenWillYouPage.chooseInstalments()
    defendantPaymentPlanPage.enterRepaymentPlan(defendantRepaymentPlan, text)
    statementOfMeansSteps.fillStatementOfMeansData()
    I.see('Respond to a money claim')
    defendantSteps.selectTaskFreeMediation()
    defendantFreeMediationPage.chooseYes()
  }

  submitDefenceText (text: string): void {
    defendantSteps.selectTaskYourDefence()
    defendantYourDefencePage.enterYourDefence(text)
  }

  askforMediation (): void {
    defendantSteps.selectTaskFreeMediation()
    defendantFreeMediationPage.chooseYes()
  }

  verifyCheckAndSendPageCorrespondsTo (defenceType: DefenceType): void {
    if (defenceType === DefenceType.PART_ADMISSION_BECAUSE_AMOUNT_IS_TOO_HIGH) {
      defendantCheckAndSendPage.verifyFactsPartialResponseClaimAmountTooMuch()
    } else {
      defendantCheckAndSendPage.verifyFactsPartialResponseIBelieveIPaidWhatIOwe()
    }
  }

  verifyImpactOfDisputeIsVisible (impactOfDispute: string): void {
    I.see(impactOfDispute)
  }

  checkAndSendAndSubmit (defendantType: PartyType): void {
    if (defendantType === PartyType.COMPANY || defendantType === PartyType.ORGANISATION) {
      defendantCheckAndSendPage.signStatementOfTruthAndSubmit('Jonny', 'Director')
    } else {
      defendantCheckAndSendPage.checkFactsTrueAndSubmit()
    }
  }

  async makeDefenceAndSubmit (defendantEmail: string, defendantType: PartyType, defenceType: DefenceType = DefenceType.FULL_REJECTION_WITH_DISPUTE): Promise<void> {
    I.see('Confirm your details')
    I.see('More time needed to respond')
    I.see('Do you owe the money claimed')
    I.dontSee('Your defence')
    I.dontSee('COMPLETE')

    this.confirmYourDetails(defendantType)
    I.see('COMPLETE')

    this.requestMoreTimeToRespond()

    switch (defenceType) {
      case DefenceType.FULL_REJECTION_WITH_DISPUTE:
        this.rejectAllOfClaimAsDisputeClaim()
        I.see('Your defence')
        this.submitDefenceText('I fully dispute this claim')
        this.askforMediation()
        defendantSteps.selectCheckAndSubmitYourDefence()
        break

      case DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID:
        this.rejectAllOfClaimAsAlreadyPaid()
        I.see('Your defence')
        this.submitDefenceText('I have already paid')
        defendantSteps.selectCheckAndSubmitYourDefence()
        break

      case DefenceType.PART_ADMISSION_BECAUSE_AMOUNT_IS_TOO_HIGH:
        this.rejectPartOfTheClaimTooMuch(defence)
        defendantSteps.selectCheckAndSubmitYourDefence()
        this.verifyCheckAndSendPageCorrespondsTo(defenceType)
        this.verifyImpactOfDisputeIsVisible(defence.impactOfDispute)
        break

      case DefenceType.PART_ADMISSION_BECAUSE_BELIEVED_AMOUNT_IS_PAID:
        this.rejectPartOfTheClaim_PaidWhatIBelieveIOwe(defence)
        defendantSteps.selectCheckAndSubmitYourDefence()
        this.verifyCheckAndSendPageCorrespondsTo(defenceType)
        this.verifyImpactOfDisputeIsVisible(defence.impactOfDispute)
        break
    }

    this.checkAndSendAndSubmit(defendantType)
    if (defenceType === DefenceType.FULL_REJECTION_WITH_DISPUTE || defenceType === DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID) {
      I.see('Defence submitted')
    } else {
      I.see('Next steps')
    }
  }

  async makePartialDefence (claimRef: string, defendant: Party, claimantType: Party, defendantEmail: string, defendantType: PartyType, defenceType: DefenceType = DefenceType.FULL_ADMISSION): Promise<void> {
    I.see('Confirm your details')
    I.see('More time needed to respond')
    I.see('Do you owe the money claimed')
    I.dontSee('Your defence')
    I.dontSee('COMPLETE')

    this.confirmYourDetails(defendantType)
    I.see('COMPLETE')

    this.requestMoreTimeToRespond()

    switch (defenceType) {

      case DefenceType.FULL_ADMISSION:
        this.admitAllOfClaim()
        I.see('admission form N9A')
        I.see(claimRef)
        I.see(claimantType.name)
        I.see(defendant.name)
        break

      case DefenceType.PART_ADMISSION:
        this.admitPartOfClaim()
        I.see('admission form N9A')
        I.see('defence and counterclaim N9B')
        I.see(claimRef)
        I.see(claimantType.name)
        I.see(defendant.name)
        break

      case DefenceType.FULL_REJECTION_WITH_COUNTER_CLAIM:
        this.admitAllOfClaimAndMakeCounterClaim()
        I.see('defence and counterclaim form N9B')
        I.see(claimRef)
        I.see(claimantType.name)
        I.see(defendant.name)
        break

      case DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID:
        this.rejectAllOfTheClaim_PaidWhatIBeleiveIOwe()
        I.see('admission form N9A')
        I.see('defence and counterclaim N9B')
        I.see(claimRef)
        I.see(claimantType.name)
        I.see(defendant.name)
        break

      case DefenceType.FULL_REJECTION_BECAUSE_FULL_AMOUNT_IS_PAID_WITH_AMOUNT_CLAIMED:
        this.rejectAllOfTheClaim_WhenDidYouPay(defence)
        defendantSteps.selectCheckAndSubmitYourDefence()
        I.see('When did you pay this amount?')
        I.see('How did you pay the amount claimed?')
        break
    }
  }
}

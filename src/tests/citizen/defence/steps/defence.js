'use strict'
/* global actor */

const request = require('request-promise-native')

let I,
  claimPinNumber,
  defendantStartPage,
  defendantEnterClaimRefPage,
  defendantEnterPinPage,
  defendantViewClaimPage,
  defendantRegisterPage,
  defendantNameAndAddressPage,
  defendantDobPage,
  defendantMobilePage,
  defendantMoreTimeRequestPage,
  defendantMoreTimeConfirmationPage,
  defendantDefenceTypePage,
  defendantRejectAllOfClaimPage,
  defendantYourDefencePage,
  defendantFreeMediationPage,
  defendantCheckAndSendPage,
  defendantHowMuchYouBelieveYouOwePage,
  defendantHowMuchHaveYouPaidTheClaimant,
  defendantRejectPartOfClaimPage,
  defendantTimelineOfEventsPage,
  defendantImpactOfDisputePage,
  loginPage,
  defendantSteps

class Helper {
  static getLetterHolderId (claimRef) {
    return request.get({
      uri: `http://claim-store-api:4400/testing-support/claims/${claimRef}`,
      resolveWithFullResponse: true,
      rejectUnauthorized: false
    })
  }

  static getPin (letterHolderId) {
    return request.get({
      uri: `http://idam-api:8080/testing-support/accounts/pin/${letterHolderId}`,
      resolveWithFullResponse: true,
      rejectUnauthorized: false
    })
  }
}

const updatedAddress = {line1: 'ABC Street', line2: 'A cool place', city: 'Bristol', postcode: 'AAA BCC'}

module.exports = {

  _init () {
    I = actor()

    defendantStartPage = require('../pages/defendant-start')
    defendantEnterClaimRefPage = require('../pages/defendant-enter-claim-reference')
    defendantEnterPinPage = require('../pages/defendant-enter-claim-pin-number')
    defendantViewClaimPage = require('../pages/defendant-view-claim')
    defendantRegisterPage = require('../pages/defendant-register')
    defendantNameAndAddressPage = require('../pages/defendant-name-and-address')
    defendantDobPage = require('../pages/defendant-dob')
    defendantMobilePage = require('../pages/defendant-mobile')
    defendantMoreTimeRequestPage = require('../pages/defendant-more-time-request')
    defendantMoreTimeConfirmationPage = require('../pages/defendant-more-time-confirmation')
    defendantDefenceTypePage = require('../pages/defendant-defence-type')
    defendantRejectAllOfClaimPage = require('../pages/defendant-reject-all-of-claim')
    defendantYourDefencePage = require('../pages/defendant-your-defence')
    defendantFreeMediationPage = require('../pages/defendant-free-mediation')
    defendantCheckAndSendPage = require('../pages/defendant-check-and-send')
    defendantHowMuchYouBelieveYouOwePage = require('../pages/defendant-how-much-you-owe')
    defendantHowMuchHaveYouPaidTheClaimant = require('../pages/defendant-how-much-have-you-paid')
    defendantRejectPartOfClaimPage = require('../pages/defendant-reject-part-of-claim')
    defendantTimelineOfEventsPage = require('../pages/defendant-timeline-events')
    defendantImpactOfDisputePage = require('../pages/defendant-impact-of-dispute')

    loginPage = require('../../home/pages/login')
    defendantSteps = require('../../home/steps/defendant')
  },

  defendantType: {
    individual: 'individual',
    soleTrader: 'soleTrader',
    company: 'company',
    organisation: 'organisation'
  },

  defenceType: {
    admitAllOfTheClaim: 'admitAllOfTheClaim',
    rejectPartOfTheClaim: {
      claimAmountTooMuch: 'claimAmountTooMuch',
      iPaidWhatIBelieveIOwe: 'iPaidWhatIBelieveIOwe'
    },
    rejectAllOfTheClaim: {
      alreadyPaidInFull: 'alreadyPaidInFull',
      disputeTheClaim: 'disputeTheClaim',
      defendNowAndCounterclaim: 'defendNowAndCounterclaim'
    }
  },

  async getClaimPin (claimRef) {
    const claimObj = await Helper.getLetterHolderId(claimRef)

    const letterHolderId = JSON.parse(claimObj.body).letterHolderId
    const pinResponse = await Helper.getPin(letterHolderId)

    return pinResponse.body
  },

  enterClaimReference (claimRef) {
    defendantStartPage.open()
    defendantStartPage.start()
    defendantEnterClaimRefPage.enterClaimReference(claimRef)
  },

  async enterClaimPin (claimRef) {
    claimPinNumber = await this.getClaimPin(claimRef)
    defendantEnterPinPage.enterPinNumber(claimPinNumber)
  },

  respondToClaim () {
    I.see('Number')
    I.see('Amount')
    I.see('Reason for claim')
    defendantViewClaimPage.clickRespondToClaim()
  },

  loginAsDefendant (defendant) {
    defendantRegisterPage.clickLinkIAlreadyHaveAnAccount()
    loginPage.login(defendant.email, defendant.password)
  },

  confirmYourDetails (defendant, defendantType) {
    defendantSteps.selectTaskConfirmYourDetails()
    defendantNameAndAddressPage.enterAddress(updatedAddress)
    if (defendantType === this.defendantType.individual) {
      defendantDobPage.enterDOB(defendant.dateOfBirth)
    }
    defendantMobilePage.enterMobile(defendant.mobile)
  },

  requestMoreTimeToRespond () {
    defendantSteps.selectTaskMoreTimeNeededToRespond()
    defendantMoreTimeRequestPage.chooseYes()
    defendantMoreTimeConfirmationPage.confirm()
  },

  rejectAllOfClaim () {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectMoneyClaim()
    defendantRejectAllOfClaimPage.disputeTheClaim()
  },

  addTimeLineOfEvents (defendant) {
    I.see('Add your timeline of events')
    defendantTimelineOfEventsPage.enterTimelineEvent('0', defendant.defence.partialRejection.timeline.event1.date,
      defendant.defence.partialRejection.timeline.event1.description)
    defendantTimelineOfEventsPage.enterTimelineEvent('1', defendant.defence.partialRejection.timeline.event2.date,
      defendant.defence.partialRejection.timeline.event2.description)
    defendantTimelineOfEventsPage.submitForm()
  },

  explainImpactOfDispute (defendant) {
    I.see('How this dispute has affected you?')
    defendantImpactOfDisputePage.enterImpactOfDispute(defendant.defence.partialRejection.impactOfDispute.explanation)
    defendantImpactOfDisputePage.submitForm()
  },

  rejectPartOfTheClaim_PaidWhatIBelieveIOwe (defendant) {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectPartOfMoneyClaim()
    defendantRejectPartOfClaimPage.rejectClaimPaidWhatIBelieveIOwe()
    I.see('Respond to a money claim')
    defendantSteps.selectTaskHowMuchPaidToClaiment()
    defendantHowMuchHaveYouPaidTheClaimant.enterAmountPaidWithDateAndExplaination(
      defendant.defence.partialRejection.paidWhatIBelieveIOwe.howMuchAlreadyPaid,
      defendant.defence.partialRejection.paidWhatIBelieveIOwe.paidDate,
      defendant.defence.partialRejection.paidWhatIBelieveIOwe.explaination)
    this.addTimeLineOfEvents(defendant)
    I.see('List your evidence')
    I.click('Save and continue')
    this.explainImpactOfDispute(defendant)
    defendantSteps.selectTaskFreeMediation()
    defendantFreeMediationPage.chooseYes()
  },

  rejectPartOfTheClaimTooMuch (defendant) {
    defendantSteps.selectTaskDoYouOweTheMoneyClaimed()
    defendantDefenceTypePage.rejectPartOfMoneyClaim()
    defendantRejectPartOfClaimPage.rejectClaimTooMuch()
    I.see('Respond to a money claim')
    defendantSteps.selectTaskHowMuchMoneyBelieveYouOwe()
    defendantHowMuchYouBelieveYouOwePage.enterAmountOwedAndExplaination(
      defendant.defence.partialRejection.claimAmountIsTooMuch.howMuchIbelieveIOwe,
      defendant.defence.partialRejection.claimAmountIsTooMuch.explaination)
    this.addTimeLineOfEvents(defendant)
    I.see('List your evidence')
    I.click('Save and continue')
    this.explainImpactOfDispute(defendant)
    defendantSteps.selectTaskFreeMediation()
    defendantFreeMediationPage.chooseYes()
  },

  fullDefence () {
    defendantSteps.selectTaskYourDefence()
    defendantYourDefencePage.enterYourDefence('I am not guilty!')
    defendantSteps.selectTaskFreeMediation()
    defendantFreeMediationPage.chooseYes()
  },

  verifyCheckAndSendPageCorrespondsTo (defenceType) {
    if (defenceType === this.defenceType.rejectPartOfTheClaim.claimAmountTooMuch) {
      defendantCheckAndSendPage.verifyFactsPartialResponseClaimAmountTooMuch()
    } else {
      defendantCheckAndSendPage.verifyFactsPartialResponseIBelieveIPaidWhatIOwe()
    }
  },

  verifyImpactOfDisputeIsVisible (defendant) {
    I.see(defendant.defence.partialRejection.impactOfDispute.explanation)
  },

  checkAndSendAndSubmit (defendantType) {
    if (defendantType === this.defendantType.company || defendantType === this.defendantType.organisation) {
      defendantCheckAndSendPage.signStatementOfTruthAndSubmit('Jonny', 'Director')
    } else {
      defendantCheckAndSendPage.checkFactsTrueAndSubmit()
    }
  },

  async makeDefenceAndSubmit (defendantType, defendant, defenceType = this.defenceType.rejectAllOfTheClaim.disputeTheClaim) {
    this.loginAsDefendant(defendant)
    I.see('Confirm your details')
    I.see('More time needed to respond')
    I.see('Do you owe the money claimed')
    I.dontSee('Your defence')
    I.dontSee('COMPLETE')

    this.confirmYourDetails(defendant, defendantType)
    I.see('COMPLETE')

    this.requestMoreTimeToRespond()

    const claimAmountTooMuch = this.defenceType.rejectPartOfTheClaim.claimAmountTooMuch
    const iPaidWhatIBelieveIOwe = this.defenceType.rejectPartOfTheClaim.iPaidWhatIBelieveIOwe
    const disputeTheClaim = this.defenceType.rejectAllOfTheClaim.disputeTheClaim

    switch (defenceType) {
      case disputeTheClaim:
        this.rejectAllOfClaim()
        I.see('Your defence')
        this.fullDefence()
        defendantSteps.selectCheckAndSubmitYourDefence()
        break

      case claimAmountTooMuch:
        this.rejectPartOfTheClaimTooMuch(defendant)
        defendantSteps.selectCheckAndSubmitYourDefence()
        this.verifyCheckAndSendPageCorrespondsTo(defenceType)
        this.verifyImpactOfDisputeIsVisible(defendant)
        break

      case iPaidWhatIBelieveIOwe:
        this.rejectPartOfTheClaim_PaidWhatIBelieveIOwe(defendant)
        defendantSteps.selectCheckAndSubmitYourDefence()
        this.verifyCheckAndSendPageCorrespondsTo(defenceType)
        this.verifyImpactOfDisputeIsVisible(defendant)
        break
    }

    this.checkAndSendAndSubmit(defendantType)
    if (defenceType === disputeTheClaim) {
      I.see('Defence submitted')
    } else {
      I.see('Next steps')
    }
  }
}

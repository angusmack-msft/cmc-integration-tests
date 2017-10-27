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
    loginPage = require('../../home/pages/login')

    defendantSteps = require('../../home/steps/defendant')
  },

  defendantType: {
    individual: 'individual',
    soleTrader: 'soleTrader',
    company: 'company',
    organisation: 'organisation'
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
    I.see('View the claim', 'h1.heading-xlarge')
    I.see('Claim details', 'h2.heading-medium')
    I.see('Number')
    I.see('Amount')
    I.see('Reason for claim')
    defendantViewClaimPage.clickRespondToClaim()
  },

  loginAsDefendant (defendant) {
    defendantRegisterPage.clickLinkIAlreadyHaveAnAccount()
    loginPage.login(defendant.email, defendant.password)
  },

  confirmYourDetails (defendantType) {
    defendantSteps.selectTaskConfirmYourDetails()
    defendantNameAndAddressPage.enterAddress(updatedAddress)
    if (defendantType === this.defendantType.individual) {
      defendantDobPage.enterDOB({day: '1', month: '1', year: '1990'})
    }
    defendantMobilePage.enterMobile('07873737575')
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

  fullDefence () {
    defendantSteps.selectTaskYourDefence()
    defendantYourDefencePage.enterYourDefence('I am not guilty!')
    defendantFreeMediationPage.chooseYes()
  },

  checkAndSendAndSubmit (defendantType) {
    defendantSteps.selectCheckAndSubmitYourDefence()
    if (defendantType === this.defendantType.company || defendantType === this.defendantType.organisation) {
      defendantCheckAndSendPage.signStatementOfTruthAndSubmit('Jonny', 'Director')
    } else {
      defendantCheckAndSendPage.checkFactsTrueAndSubmit()
    }
  },

  async makeDefenceAndSubmit (defendantType, defendant) {
    this.loginAsDefendant(defendant)
    I.see('Confirm your details')
    I.see('More time needed to respond')
    I.see('Do you owe the money claimed')
    I.dontSee('Your defence')
    I.dontSee('COMPLETE')

    this.confirmYourDetails(defendantType)
    I.see('COMPLETE')

    this.requestMoreTimeToRespond()

    this.rejectAllOfClaim()
    I.see('Your defence')

    this.fullDefence()

    this.checkAndSendAndSubmit(defendantType)
    I.see('Defence submitted')
  }
}

import * as testData from 'data/test-data'

const claimant = testData.claimant('civilmoneyclaims+notused@gmail.com')
const defendant = testData.defendant('civilmoneyclaims+adefendant@gmail.com')
const fee = 25  // fee is £25 for 80.50 claimamount

let I
let citizenResolveDisputePage
let citizenCompletingClaimInfoPage
let partyTypePage
let companyDetailsPage
let individualDetailsPage
let organisationDetailsPage
let citizenDOBPage
let citizenMobilePage
let citizenEmailPage
let claimantClaimAmountPage
let claimantFeesToPayPage
let claimantReasonPage
let claimantCheckAndSendPage
let claimantClaimConfirmedPage
let userSteps
let interestSteps
let paymentSteps
let defenceSteps
let totalClaimAmount
let eligibilitySteps

module.exports = {

  _init () {
    I = actor()
    citizenResolveDisputePage = require('../pages/citizen-resolve-dispute')
    citizenCompletingClaimInfoPage = require('../pages/citizen-completing-claim-info')
    partyTypePage = require('../pages/party-type')
    individualDetailsPage = require('../pages/individual-details')
    companyDetailsPage = require('../pages/company-details')
    organisationDetailsPage = require('../pages/organisation-details')
    citizenDOBPage = require('../pages/citizen-dob')
    citizenMobilePage = require('../pages/citizen-mobile')
    citizenEmailPage = require('../pages/citizen-email')
    claimantClaimAmountPage = require('../pages/claimant-claim-amount')
    claimantFeesToPayPage = require('../pages/claimant-fees-to-pay')
    claimantReasonPage = require('../pages/claimant-reason')
    claimantCheckAndSendPage = require('../pages/claimant-check-and-send')
    claimantClaimConfirmedPage = require('../pages/claimant-claim-confirmed')
    userSteps = require('../../home/steps/user')
    interestSteps = require('../steps/interest')
    paymentSteps = require('../steps/payment')
    defenceSteps = require('../../defence/steps/defence')
    eligibilitySteps = require('../steps/eligibility')
  },

  claimantType: {
    individual: 'individual',
    soleTrader: 'soleTrader',
    company: 'company',
    organisation: 'organisation'
  },

  reloadPage () {
    I.executeScript(function () {
      document.location.reload(true)
    })
  },
  getTotalClaimAmount () {
    totalClaimAmount = parseFloat(claimant.claimAmount.amount1) + parseFloat(claimant.claimAmount.amount2) + parseFloat(claimant.claimAmount.amount3)
    totalClaimAmount = totalClaimAmount + fee
    totalClaimAmount = totalClaimAmount.toFixed(2)
    return totalClaimAmount
  },

  enterTestDataClaimAmount () {
    claimantClaimAmountPage.enterAmount(claimant.claimAmount.amount1, claimant.claimAmount.amount2, claimant.claimAmount.amount3)
    claimantClaimAmountPage.calculateTotal()
  },

  resolveDispute () {
    citizenResolveDisputePage.confirmRead()
  },

  readCompletingYourClaim () {
    citizenCompletingClaimInfoPage.confirmRead()
  },

  enterMyDetails (claimantType) {
    switch (claimantType) {

      case this.claimantType.individual:
        partyTypePage.selectIndividual()
        individualDetailsPage.enterName(claimant.name)
        individualDetailsPage.enterAddresses(claimant.address, claimant.correspondenceAddress)
        individualDetailsPage.submit()
        citizenDOBPage.enterDOB(claimant.dateOfBirth)
        break
      case this.claimantType.soleTrader:
        partyTypePage.selectSoleTrader()
        individualDetailsPage.enterName(claimant.name)
        individualDetailsPage.enterAddresses(claimant.address, claimant.correspondenceAddress)
        individualDetailsPage.submit()
        break
      case this.claimantType.company:
        partyTypePage.selectCompany()
        companyDetailsPage.enterCompanyName(claimant.companyName)
        companyDetailsPage.enterContactPerson(claimant.name)
        companyDetailsPage.enterAddresses(claimant.address, claimant.correspondenceAddress)
        companyDetailsPage.submit()
        break
      case this.claimantType.organisation:
        partyTypePage.selectOrganisationl()
        organisationDetailsPage.enterOrganisationName(claimant.organisationName)
        organisationDetailsPage.enterContactPerson(claimant.name)
        organisationDetailsPage.enterAddresses(claimant.address, claimant.correspondenceAddress)
        organisationDetailsPage.submit()
        break
      default:
        throw new Error('non-matching claimant type for claim')
    }
    citizenMobilePage.enterMobile(claimant.mobileNumber)
  },

  enterTheirDetails (defendantType, enterDefendantEmail = true) {
    switch (defendantType) {

      case defenceSteps.defendantType.individual:
        partyTypePage.selectIndividual()
        individualDetailsPage.enterName(defendant.name)
        individualDetailsPage.enterAddress(defendant.address)
        individualDetailsPage.submit()
        break
      case defenceSteps.defendantType.soleTrader:
        partyTypePage.selectSoleTrader()
        individualDetailsPage.enterName(defendant.soleTraderName)
        individualDetailsPage.enterAddress(defendant.address)
        individualDetailsPage.submit()
        break
      case defenceSteps.defendantType.company:
        partyTypePage.selectCompany()
        companyDetailsPage.enterCompanyName(defendant.companyName)
        companyDetailsPage.enterAddress(defendant.address)
        companyDetailsPage.submit()
        break
      case defenceSteps.defendantType.organisation:
        partyTypePage.selectOrganisationl()
        organisationDetailsPage.enterOrganisationName(defendant.organisationName)
        organisationDetailsPage.enterAddress(defendant.address)
        organisationDetailsPage.submit()
        break
      default:
        throw new Error('non-matching defendant Type type for claim')
    }
    if (enterDefendantEmail) {
      citizenEmailPage.enterEmail(defendant.email)
    } else {
      citizenEmailPage.submitForm()
    }
  },

  enterClaimAmount (amount1, amount2, amount3) {
    claimantClaimAmountPage.enterAmount(amount1, amount2, amount3)
    claimantClaimAmountPage.calculateTotal()
  },

  claimantTotalAmountPageRead () {
    claimantClaimAmountPage.continue()
  },

  readFeesPage () {
    claimantFeesToPayPage.continue()
  },

  enterClaimReason () {
    claimantReasonPage.enterReason(claimant.claimReason)
  },

  checkClaimFactsAreTrueAndSubmit (claimantType) {
    claimantCheckAndSendPage.verifyCheckAndSendAnswers(claimant)

    if (claimantType === this.claimantType.company || claimantType === this.claimantType.organisation) {
      claimantCheckAndSendPage.signStatementOfTruthAndSubmit('Jonny', 'Director')
    } else {
      claimantCheckAndSendPage.checkFactsTrueAndSubmit()
    }
  },

  makeAClaimAndSubmitStatementOfTruth (email, claimantType, defendantType, enterDefendantEmail = true) {
    userSteps.login(email)
    userSteps.startClaim()
    this.completeEligibility()
    userSteps.selectResolvingThisDispute()
    this.resolveDispute()
    userSteps.selectCompletingYourClaim()
    this.readCompletingYourClaim()
    userSteps.selectYourDetails()
    this.enterMyDetails(claimantType)
    userSteps.selectTheirDetails()
    this.enterTheirDetails(defendantType, enterDefendantEmail)
    userSteps.selectClaimAmount()
    this.enterTestDataClaimAmount()
    this.claimantTotalAmountPageRead()
    interestSteps.enterDefaultInterest()
    this.readFeesPage()
    I.see('Total amount you’re claiming')
    interestSteps.skipClaimantInterestTotalPage()
    userSteps.selectClaimDetails()
    this.enterClaimReason()
    userSteps.selectCheckAndSubmitYourClaim()
    this.checkClaimFactsAreTrueAndSubmit(claimantType)
  },

  makeAClaimAndSubmit (email, claimantType, defendantType, enterDefendantEmail = true) {
    this.makeAClaimAndSubmitStatementOfTruth(email, claimantType, defendantType, enterDefendantEmail)
    paymentSteps.payWithWorkingCard()
    this.reloadPage() // reload gets over the ESOCKETTIMEDOUT Error
    this.reloadPage() // reload gets over the 409 Duplicate Key value violates unique constraint Error
    I.waitForText('Claim submitted')
    return claimantClaimConfirmedPage.getClaimReference()
  },
  completeEligibility () {
    eligibilitySteps.complete()
  }

}

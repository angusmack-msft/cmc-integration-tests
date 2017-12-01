'use strict'

const claimant = require('../../../../data/test-data').claimant

let loginPage, startClaimPage, yourOrganisationNamePage, yourOrganisationAddressPage, yourContactDetailsPage,
  yourReferencePage, yourCountyCourtPage, claimantNamePage, claimantAddressPage, claimantAddPage

module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
    yourOrganisationNamePage = require('../../claim/pages/claimant-representative-name')
    yourOrganisationAddressPage = require('../../claim/pages/claimant-representative-address')
    yourContactDetailsPage = require('../../claim/pages/claimant-representative-contacts')
    yourReferencePage = require('../../claim/pages/claimant-reference')
    yourCountyCourtPage = require('../../claim/pages/claimant-preferred-court')
    claimantNamePage = require('../../claim/pages/claimant-name')
    claimantAddressPage = require('../../claim/pages/claimant-address')
    claimantAddPage = require('../../claim/pages/claimant-add')
  },
  loginUser (userEmail) {
    loginPage.open()
    loginPage.login(userEmail, claimant(userEmail).password)
  },
  startClaim () {
    startClaimPage.open()
    startClaimPage.startClaim()
  },
  loginAndStartClaim (userEmail) {
    this.loginUser(userEmail)
    this.startClaim()
  },
  enterYourOrganisationNamePage () {
    yourOrganisationNamePage.enterYourOrganisationName()
  },
  enterYourOrganisationAddress () {
    yourOrganisationAddressPage.enterYourOrganisationAddress()
  },
  enterYourOrganisationContactDetails () {
    yourContactDetailsPage.enterYourOrganisationContactDetails()
  },
  enterYourReferenceNumber () {
    yourReferencePage.enterYourReferenceForClaim()
  },
  enterYourPreferredCountyCourt () {
    yourCountyCourtPage.enterYourPreferredCountyCourt()
  },
  enterClaimantServiceDetails () {
    yourOrganisationNamePage.enterYourOrganisationName()
    yourOrganisationAddressPage.enterYourOrganisationAddress()
    yourContactDetailsPage.enterYourOrganisationContactDetails()
    yourReferencePage.enterYourReferenceForClaim()
    yourCountyCourtPage.enterYourPreferredCountyCourt()
  },
  enterMandatoryClaimantServiceDetails () {
    yourOrganisationNamePage.enterYourOrganisationName()
    yourOrganisationAddressPage.enterOnlyMandatoryOrganisationAddress()
    yourContactDetailsPage.submitOnlyMandatoryData()
    yourReferencePage.submitOnlyMandatoryData()
    yourCountyCourtPage.submitOnlyMandatoryData()
    claimantNamePage.enterOnlyMandatoryClaimantTypeData()
  },
  enterMandatoryClaimantAddressDetails () {
    claimantAddressPage.enterMandatoryClaimantOrganisationAddress()
  },
  enterClaimantName () {
    claimantNamePage.enterClaimantName()
  },
  enterClaimantAddress () {
    claimantAddressPage.enterYourOrganisationAddress()
  },
  addAdditionalClaimant () {
    claimantAddPage.enterAdditionalClaimant()
  },
  noAdditionalClaimant () {
    claimantAddPage.chooseNoAdditionalClaimant()
  },
  verifyOrganizationDetails () {
    yourOrganisationNamePage.verifyOrganizationName()
    yourOrganisationAddressPage.verifyOrganizationAddress()
    yourContactDetailsPage.verifyContactDetails()
  },
  verifyAndChangeClaimantDetails () {
    claimantNamePage.verifyClaimantIndividualDetails()
    claimantNamePage.changeRemoveIndividualClaimantDetails()
  }
}

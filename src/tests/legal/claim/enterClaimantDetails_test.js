Feature('Claimant Enter details of claim')

Scenario('I can fill in two claimants and update their details @legal', function * (I, legalUserSteps) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalUserSteps.enterClaimantServiceDetails()
  legalUserSteps.enterClaimantTypeIndividual()
  I.see('Claimant: Mr Benugo')
  legalUserSteps.enterClaimantAddress()
  legalUserSteps.addAdditionalClaimant()
  legalUserSteps.enterClaimantTypeIndividual()
  I.see('Claimant 2: Mr Benugo')
  legalUserSteps.enterClaimantAddress()
  legalUserSteps.verifyAndChangeClaimantDetails()
})

Scenario('I can save organisation details and populate them in a subsequent claim via cookie info @legal', function * (I, legalUserSteps) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalUserSteps.enterClaimantServiceDetails()
  legalUserSteps.startClaim()
  legalUserSteps.verifyOrganizationDetails()
})

Scenario('Check Error Messages in Add additional claimant Page @legal', function * (I, legalUserSteps, legalClaimantAdd) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalUserSteps.enterClaimantServiceDetails()
  legalUserSteps.enterClaimantTypeIndividual()
  I.see('Claimant: Mr Benugo')
  legalUserSteps.enterClaimantAddress()
  legalClaimantAdd.checkMandatoryErrorMessageForChooseClaimant()
})

Scenario('Check Error Messages in Your organisation name Page @legal', function * (I, legalUserSteps, legalEnterYourOrganisationNamePage) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalEnterYourOrganisationNamePage.checkMandatoryErrorMessage()
  legalEnterYourOrganisationNamePage.checkForBlankErrorMessage()
})

Scenario('Check Error Messages in Enter your organisation address Page @legal', function * (I, legalUserSteps, legalEnterYourOrganisationAddressPage) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalUserSteps.enterYourOrganisationNamePage()
  legalEnterYourOrganisationAddressPage.checkMandatoryErrorMessage()
  legalEnterYourOrganisationAddressPage.checkForBlankErrorMessage()
  legalEnterYourOrganisationAddressPage.checkForIndividualMessage()
  legalEnterYourOrganisationAddressPage.checkForAddressLineLength()
  legalEnterYourOrganisationAddressPage.checkForPostCodeLengthMessage()
})

Scenario('Check Error Messages in Enter your organisation contact details Page @legal', function * (I, legalUserSteps, legalEnterYourOrganisationContactDetails) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalUserSteps.enterYourOrganisationNamePage()
  legalUserSteps.enterYourOrganisationAddress()
  legalEnterYourOrganisationContactDetails.checkPhoneNumberLengthValidation()
  legalEnterYourOrganisationContactDetails.checkEmptyOrInvalidPhoneNumberValidation()
  legalEnterYourOrganisationContactDetails.checkForEmailFormatErrorMessage()
})

Scenario('Check Error Messages in claimant type Page @legal', function * (I, legalUserSteps, legalClaimantType) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalClaimantType.open()
  legalClaimantType.checkMandatoryErrorMessageForChooseClaimant()
  legalClaimantType.checkMandatoryErrorMessageForOrganisationName()
  legalClaimantType.checkForBlankErrorMessageForOrganisationName()
  legalClaimantType.checkMandatoryErrorMessageForIndividualName()
  legalClaimantType.checkForBlankErrorMessageForIndividualName()
})

Scenario('Check Error Messages in Enter your claimant address Page @legal', function * (I, legalUserSteps, legalClaimantType, legalClaimantAddress) {
  const userEmail = yield I.createSolicitorUser()
  legalUserSteps.loginAndStartClaim(userEmail)
  legalClaimantType.open()
  legalUserSteps.enterClaimantTypeOrganisation()
  legalClaimantAddress.checkMandatoryErrorMessage()
  legalClaimantAddress.checkForBlankErrorMessage()
  legalClaimantAddress.checkForIndividualMessage()
  legalClaimantAddress.checkForAddressLineLength()
  legalClaimantAddress.checkForPostCodeLengthMessage()
})

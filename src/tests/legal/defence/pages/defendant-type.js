'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    organisationType: 'input[id=organisationType]',
    organisationName: 'input[id=organisation]',
    companyHouseNumber: 'input[id=companyHouseNumber]',
    individualType: 'input[id=individualType]',
    individualTitle: 'input[id=title]',
    individualFullName: 'input[id=fullName]',
    changeFirstDefendant: '//*[@href="/legal/claim/defendant-change?index=1"]',
    removeSecondDefendant: '//*[@href="/legal/claim/defendant-remove?index=2"]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },
  data: {
    defendantOneOrganisationNameText: 'Def corporation',
    defendantTwoOrganisationNameText: 'Ghi corporation',
    individualTitleText: 'Mr',
    individualFullNameText: 'Pret',
    updatedNameText: 'DefendantChange',
    removeButtonText: 'Remove',
    changeButtonText: 'Change'
  },
  open () {
    I.amOnLegalAppPage('/claim/defendant-type')
  },

  enterDefendantTypeIndividual () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualTitle, this.data.individualTitleText)
    I.fillField(this.fields.individualFullName, this.data.individualFullNameText)
    I.click(this.buttons.saveAndContinue)
  },

  enterDefendantTypeOrganisation () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, this.data.defendantOneOrganisationNameText)
    I.fillField(this.fields.companyHouseNumber, '678910')
    I.click(this.buttons.saveAndContinue)
  },

  enterAnotherDefendantTypeIndividual () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualTitle, 'Mrs')
    I.fillField(this.fields.individualFullName, 'Orange')
    I.click(this.buttons.saveAndContinue)
  },

  enterAnotherDefendantTypeOrganisation () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, this.data.defendantTwoOrganisationNameText)
    I.fillField(this.fields.companyHouseNumber, '111213')
    I.click(this.buttons.saveAndContinue)
  },

  verifyDefendantOrganisationDetails () {
    I.see('Defendant')
    I.see(this.data.defendantOneOrganisationNameText)
    I.see('Mrs Orange')
    I.see(this.data.defendantTwoOrganisationNameText)
    I.see(this.data.removeButtonText)
    I.see(this.data.changeButtonText)
  },
  changeRemoveIndividualDefendantDetails () {
    I.click(this.data.removeButtonText, this.fields.removeSecondDefendant)
    I.click(this.data.changeButtonText, this.fields.changeFirstDefendant)
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualFullName, this.data.updatedNameText)
    I.click(this.buttons.saveAndContinue)
    I.click(this.buttons.saveAndContinue)
    I.click(this.buttons.saveAndContinue)
    I.click(this.buttons.saveAndContinue)
    I.see(this.data.updatedNameText)
  },

  checkMandatoryErrorMessageForChooseDefendant () {
    I.click(this.buttons.saveAndContinue)
    I.see('Choose a type of defendant')
  },

  checkMandatoryErrorMessageForOrganisationName () {
    I.checkOption(this.fields.organisationType)
    I.click(this.buttons.saveAndContinue)
    I.see('Enter an organisation name')
  },

  checkForBlankErrorMessageForOrganisationName () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter an organisation name')
  },

  checkMandatoryErrorMessageForIndividualName () {
    I.checkOption(this.fields.individualType)
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a full name')
  },

  checkForBlankErrorMessageForIndividualName () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualFullName, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a full name')
  }

}

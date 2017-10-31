'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    defendantRepresentedYes: 'input[id=defendant_represented_yes]',
    defendantRepresentedNo: 'input[id=defendant_represented_no]',
    companyName: 'input[id=organisationName]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnLegalAppPage('/claim/defendant-represented')
  },

  enterDefendantCompanyName () {
    I.checkOption(this.fields.defendantRepresentedYes)
    I.fillField(this.fields.companyName, 'Defendant Rep Ltd')
    I.click(this.buttons.saveAndContinue)
  },

  noDefendantCompanyName () {
    I.checkOption(this.fields.defendantRepresentedNo)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('Choose yes if defendant is represented')
  },

  checkMandatoryErrorMessageForDefendantCompanyName () {
    I.checkOption(this.fields.defendantRepresentedYes)
    I.click(this.buttons.saveAndContinue)
    I.see('Enter defendant representative organisation name')
  },

  checkForBlankErrorMessageForDefendantCompanyName () {
    I.checkOption(this.fields.defendantRepresentedYes)
    I.fillField(this.fields.companyName, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter defendant representative organisation name')
  }
}

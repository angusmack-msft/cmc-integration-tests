'use strict'
/* global actor */
const verifyPageData = require('../../../../data/legal-test-data').verifyPageData

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    claimantName: 'input[id=fullName]',
    changeFirstClaimant: '//*[@href="/legal/claim/claimant-change?index=1"]',
    removeSecondClaimant: '//*[@href="/legal/claim/claimant-remove?index=2"]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },

  data: {
    fullName: 'Mrs Jan Clark',
    updatedNameText: 'Mr Bill Gourmet',
    removeButtonText: 'Remove',
    changeButtonText: 'Change'
  },

  open () {
    I.amOnLegalAppPage('/claim/claimant-name')
  },

  enterClaimantName () {
    I.fillField(this.fields.claimantName, this.data.fullName)
    I.click(this.buttons.saveAndContinue)
  },
  verifyClaimantIndividualDetails () {
    I.see('Claimant')
    I.see(this.data.fullName)
    I.see(this.data.removeButtonText)
    I.see(this.data.changeButtonText)
  },
  changeRemoveIndividualClaimantDetails () {
    I.click(this.data.removeButtonText, this.fields.removeSecondClaimant)
    I.click(this.data.changeButtonText, this.fields.changeFirstClaimant)
    I.fillField(this.fields.claimantName, this.data.updatedNameText)
    I.click(this.buttons.saveAndContinue)
    I.click(this.buttons.saveAndContinue)
    I.see(this.data.updatedNameText)
  },
  enterOnlyMandatoryClaimantData () {
    I.fillField(this.fields.fullName, verifyPageData.claimantName)
    I.click(this.buttons.saveAndContinue)
  }
}

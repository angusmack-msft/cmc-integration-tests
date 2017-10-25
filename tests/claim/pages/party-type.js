'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    partyType: {
      individual: 'input[id="typeindividual"]',
      soleTrader: 'input[id="typesoleTrader"]',
      company: 'input[id="typecompany"]',
      organisation: 'input[id="typeorganisation"]'

    }
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  selectIndividual () {
    I.checkOption(this.fields.partyType.individual)
    I.click(this.buttons.submit)
  },

  selectSoleTrader () {
    I.checkOption(this.fields.partyType.soleTrader)
    I.click(this.buttons.submit)
  },

  selectCompany () {
    I.checkOption(this.fields.partyType.company)
    I.click(this.buttons.submit)
  },

  selectOrganisationl () {
    I.checkOption(this.fields.partyType.organisation)
    I.click(this.buttons.submit)
  }

}

'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    typeSubmission: 'input[id=typesubmission]',
    typeCustom: 'input[id=typecustom]',

    day: 'input[id="date[day]"]',
    month: 'input[id="date[month]"]',
    year: 'input[id="date[year]"]',

    reason: 'input[id="reason"]'
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectDefaultDate () {
    I.checkOption(this.fields.typeSubmission)
    I.click(this.buttons.submit)
  },

  selectParticularDate (day, month, year) {
    I.checkOption(this.fields.typeCustom)
    I.fillField(this.fields.day, day)
    I.fillField(this.fields.month, month)
    I.fillField(this.fields.year, year)
    I.fillField(this.fields.reason, 'Because I want to')
    I.click(this.buttons.submit)
  }
}

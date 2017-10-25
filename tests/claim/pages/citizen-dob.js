'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    day: 'input[id="date[day]"]',
    month: 'input[id="date[month]"]',
    year: 'input[id="date[year]"]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open (type) {
    I.amOnPage(`/claim/${type}-dob`)
  },

  enterDOB (dob) {
    I.fillField(this.fields.day, dob.day)
    I.fillField(this.fields.month, dob.month)
    I.fillField(this.fields.year, dob.year)

    I.click(this.buttons.submit)
  }
}

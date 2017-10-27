'use strict'

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    day: 'input[id="date[day]"]',
    month: 'input[id="date[month]"]',
    year: 'input[id="date[year]"]',
    claimNumber: 'input[id="claimNumber"]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  open () {
    I.amOnPage('/response/your-dob')
  },

  updateDeadline (claimNumber, date) {
    I.fillField(this.fields.claimNumber, claimNumber)

    I.fillField(this.fields.day, date.day)
    I.fillField(this.fields.month, date.month)
    I.fillField(this.fields.year, date.year)

    I.click(this.buttons.submit)

    I.see('Testing support')
  }
}

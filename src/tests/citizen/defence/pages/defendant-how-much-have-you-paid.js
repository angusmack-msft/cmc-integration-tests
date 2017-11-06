'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    amount: 'input[id=amount]',
    day: 'input[id="date[day]"]',
    month: 'input[id="date[month]"]',
    year: 'input[id="date[year]"]',
    text: 'textarea[id=text]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  enterAmountPaidWithDateAndExplaination (amount, date, explaination) {
    I.fillField(this.fields.amount, amount)
    I.fillField(this.fields.day, date.day)
    I.fillField(this.fields.month, date.month)
    I.fillField(this.fields.year, date.year)
    I.fillField(this.fields.text, explaination)
    I.click(this.buttons.submit)
  },

  continue () {
    I.click('Save and continue')
  }
}

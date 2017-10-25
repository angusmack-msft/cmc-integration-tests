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

  paymentBySetDate (paymentDate) {
    I.see('Order them to pay full amount by a set date')
    I.fillField(this.fields.day, paymentDate.day)
    I.fillField(this.fields.month, paymentDate.month)
    I.fillField(this.fields.year, paymentDate.year)

    I.click(this.buttons.submit)
  }
}

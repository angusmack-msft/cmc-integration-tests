'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    amount: 'input[id=amount]',
    text: 'textarea[id=text]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  enterAmountOwedAndExplaination (amount, explaination) {
    I.fillField(this.fields.amount, amount)
    I.fillField(this.fields.text, explaination)
    I.click(this.buttons.submit)
  }
}

'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    date: 'input[id="rows[0][date]"]',
    description: 'input[id="rows[0][description]"]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  enterAmount (date, description) {
    I.fillField(this.fields.date, 'May 2 2016')
    I.fillField(this.fields.description, 'Something happened')
  }
}

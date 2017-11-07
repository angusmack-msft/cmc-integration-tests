'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    date: 'input[id="rows[x][date]"]',
    description: 'textarea[id="rows[y][description]"]'
  },
  buttons: {
    submit: 'input[type=submit]'
  },

  enterTimelineEvent (eventNum, date, description) {
    var fieldDate = this.fields.date.replace('x', eventNum)
    var fieldDescription = this.fields.description.replace('y', eventNum)
    I.fillField(fieldDate, date)
    I.fillField(fieldDescription, description)
  },

  submitForm () {
    I.click('Save and continue')
  }

}

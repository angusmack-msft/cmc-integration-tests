'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    paymentOption: {
      Instalments: 'input[id=optionINSTALMENTS]',
      FullBySetDate: 'input[id=optionFULL_BY_SPECIFIED_DATE]'
    }
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  chooseInstalments () {
    I.checkOption(this.fields.paymentOption.Instalments)
    I.click(this.buttons.submit)
  },

  chooseFullBySetDate () {
    I.checkOption(this.fields.paymentOption.FullBySetDate)
    I.click(this.buttons.submit)
  }

}

'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    paymentOption: {
      Immediate: 'input[id=optionIMMEDIATELY]',
      Instalments: 'input[id=optionINSTALMENTS]',
      FullBySetDate: 'input[id=optionFULL_BY_SPECIFIED_DATE]'
    }
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  open () {
    I.amOnCitizenAppPage('/claim/defendant-type')
  },

  chooseImmediately () {
    I.checkOption(this.fields.paymentOption.Immediate)
    I.click(this.buttons.submit)
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

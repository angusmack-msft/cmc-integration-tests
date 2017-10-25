'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    submit: 'input[type=submit]'
  },

  selectTaskConfirmYourDetails () {
    I.click('Confirm your details')
  },

  selectTaskMoreTimeNeededToRespond () {
    I.click('More time needed to respond')
  },

  selectTaskDoYouOweTheMoneyClaimed () {
    I.click('Do you owe the money claimed')
  },

  selectTaskYourDefence () {
    I.click('Your defence')
  },

  selectTaskCheckAndSendYourResponse () {
    I.click('Check and submit your response')
  }
}

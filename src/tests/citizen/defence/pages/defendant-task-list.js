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

  selectTaskHowMuchPaidToClaiment () {
    I.click('How much have you paid the claimant?')
  },

  selectTaskHowMuchMoneyBelieveYouOwe () {
    I.click('How much money do you believe you owe?')
  },

  selectTaskWhenWillYouPay () {
    I.click('When will you pay?')
  },

  selectTaskYourDefence () {
    I.click('Your defence')
  },

  selectTaskCheckAndSendYourResponse () {
    I.click('Check and submit your response')
  },

  selectTaskFreeMediation () {
    I.click('Free mediation')
  }

}

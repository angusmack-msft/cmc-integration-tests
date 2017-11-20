'use strict'

let defendantTaskListPage

module.exports = {

  _init () {
    defendantTaskListPage = require('../../defence/pages/defendant-task-list')
  },

  selectTaskConfirmYourDetails () {
    defendantTaskListPage.selectTaskConfirmYourDetails()
  },

  selectTaskMoreTimeNeededToRespond () {
    defendantTaskListPage.selectTaskMoreTimeNeededToRespond()
  },

  selectTaskDoYouOweTheMoneyClaimed () {
    defendantTaskListPage.selectTaskDoYouOweTheMoneyClaimed()
  },

  selectTaskHowMuchMoneyBelieveYouOwe () {
    defendantTaskListPage.selectTaskHowMuchMoneyBelieveYouOwe()
  },

  selectTaskWhenWillYouPay () {
    defendantTaskListPage.selectTaskWhenWillYouPay()
  },

  selectTaskHowMuchPaidToClaiment () {
    defendantTaskListPage.selectTaskHowMuchPaidToClaiment()
  },

  selectTaskYourDefence () {
    defendantTaskListPage.selectTaskYourDefence()
  },

  selectCheckAndSubmitYourDefence () {
    defendantTaskListPage.selectTaskCheckAndSendYourResponse()
  },

  selectTaskFreeMediation () {
    defendantTaskListPage.selectTaskFreeMediation()
  }

}

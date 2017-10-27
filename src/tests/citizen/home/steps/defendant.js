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

  selectTaskYourDefence () {
    defendantTaskListPage.selectTaskYourDefence()
  },

  selectCheckAndSubmitYourDefence () {
    defendantTaskListPage.selectTaskCheckAndSendYourResponse()
  }
}

'use strict'

const claimant = require('../../../test-data').claimant

let loginPage, startClaimPage, taskListPage
module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
    taskListPage = require('../../claim/pages/claimant-task-list')
  },

  login (username) {
    loginPage.open()
    loginPage.login(username, claimant(username).password)
  },
  startClaim () {
    startClaimPage.open()
    startClaimPage.startClaim()
  },

  selectResolvingThisDispute () {
    taskListPage.selectTaskResolvingThisDispute()
  },

  selectCompletingYourClaim () {
    taskListPage.selectTaskCompletingYourClaim()
  },

  selectYourDetails () {
    taskListPage.selectTaskYourDetails()
  },

  selectTheirDetails () {
    taskListPage.selectTaskTheirDetails()
  },

  selectClaimAmount () {
    taskListPage.selectTaskClaimAmount()
  },

  selectClaimDetails () {
    taskListPage.selectTaskClaimDetails()
  },

  selectCheckAndSubmitYourClaim () {
    taskListPage.selectTaskCheckAndSubmitYourClaim()
  }
}

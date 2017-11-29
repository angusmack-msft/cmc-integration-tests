let somStartPage
let somWhatYouNeedPage
let somResidencePage
let somDependantsPage
let somMaintenancePage
let somEmploymentPage
let somBankAccountsPage

module.exports = {
  _init () {
    somStartPage = require('../pages/statement-of-means/start')
    somWhatYouNeedPage = require('../pages/statement-of-means/what-you-need')
    somResidencePage = require('../pages/statement-of-means/residence')
    somDependantsPage = require('../pages/statement-of-means/dependants')
    somMaintenancePage = require('../pages/statement-of-means/maintenance')
    somEmploymentPage = require('../pages/statement-of-means/employment')
    somBankAccountsPage = require('../pages/statement-of-means/bank-accounts')
  },

  fillStatementOfMeansData () {
    somStartPage.clickContinue()
    somWhatYouNeedPage.clickContinue()
    somResidencePage.selectOwnHome()
    somDependantsPage.selectDontHaveChildren()
    somMaintenancePage.selectDontPayMaintenance()
    somEmploymentPage.selectNotWorkingCurrently()
    somBankAccountsPage.noBankAccounts()
  }
}

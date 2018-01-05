import { DependantsPage } from 'tests/citizen/defence/pages/statement-of-means/dependants'
import { EmploymentPage } from 'tests/citizen/defence/pages/statement-of-means/employment'
import { MaintenancePage } from 'tests/citizen/defence/pages/statement-of-means/maintenance'
import { ResidencePage } from 'tests/citizen/defence/pages/statement-of-means/residence'
import { StartPage } from 'tests/citizen/defence/pages/statement-of-means/start'
import { WhatYouNeedPage } from 'tests/citizen/defence/pages/statement-of-means/what-you-need'
import { BankAccountsPage } from 'tests/citizen/defence/pages/statement-of-means/bankAccounts'
import { SupportedByYouPage } from 'tests/citizen/defence/pages/statement-of-means/supportedByYou'
import { UnemployedPage } from 'tests/citizen/defence/pages/statement-of-means/unemployed'
import { DebtsPage } from 'tests/citizen/defence/pages/statement-of-means/debts'
import { CourtOrdersPage } from 'tests/citizen/defence/pages/statement-of-means/courtOrders'
import { MonthlyIncomePage } from 'tests/citizen/defence/pages/statement-of-means/monthlyIncome'
import { MonthlyExpensesPage } from 'tests/citizen/defence/pages/statement-of-means/monthlyExpenses'

const somStartPage: StartPage = new StartPage()
const somWhatYouNeedPage: WhatYouNeedPage = new WhatYouNeedPage()
const somResidencePage: ResidencePage = new ResidencePage()
const somDependantsPage: DependantsPage = new DependantsPage()
const somMaintenancePage: MaintenancePage = new MaintenancePage()
const somEmploymentPage: EmploymentPage = new EmploymentPage()
const somBankAccountsPage: BankAccountsPage = new BankAccountsPage()
const somSupportedByYouPage: SupportedByYouPage = new SupportedByYouPage()
const somUnemployedPage: UnemployedPage = new UnemployedPage()
const somDebtsPage: DebtsPage = new DebtsPage()
const somMonthlyIncomePage: MonthlyIncomePage = new MonthlyIncomePage()
const somMonthlyExpensesPage: MonthlyExpensesPage = new MonthlyExpensesPage()
const somCourtOrdersPage: CourtOrdersPage = new CourtOrdersPage()

export class StatementOfMeansSteps {

  fillStatementOfMeansData (): void {
    somStartPage.clickContinue()
    somWhatYouNeedPage.clickContinue()
    somResidencePage.selectOwnHome()
    somDependantsPage.selectDontHaveChildren()
    somMaintenancePage.selectDontPayMaintenance()
    somSupportedByYouPage.selectDontSupportAnyone()
    somEmploymentPage.selectNotWorkingCurrently()
    somUnemployedPage.selectRetired()
    somBankAccountsPage.clickContinue()
    somDebtsPage.selectDontHaveDebts()
    somMonthlyIncomePage.fillOutAllFieldsAndContinue()
    somMonthlyExpensesPage.fillOutAllFieldsAndContinue()
    somCourtOrdersPage.selectDontHaveCourtOrders()
  }
}

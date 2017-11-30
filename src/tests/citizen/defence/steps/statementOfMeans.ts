import { DependantsPage } from 'tests/citizen/defence/pages/statement-of-means/dependants'
import { EmploymentPage } from 'tests/citizen/defence/pages/statement-of-means/employment'
import { MaintenancePage } from 'tests/citizen/defence/pages/statement-of-means/maintenance'
import { ResidencePage } from 'tests/citizen/defence/pages/statement-of-means/residence'
import { StartPage } from 'tests/citizen/defence/pages/statement-of-means/start'
import { WhatYouNeedPage } from 'tests/citizen/defence/pages/statement-of-means/what-you-need'

const somStartPage: StartPage = new StartPage()
const somWhatYouNeedPage: WhatYouNeedPage = new WhatYouNeedPage()
const somResidencePage: ResidencePage = new ResidencePage()
const somDependantsPage: DependantsPage = new DependantsPage()
const somMaintenancePage: MaintenancePage = new MaintenancePage()
const somEmploymentPage: EmploymentPage = new EmploymentPage()

export class StatementOfMeansSteps {

  fillStatementOfMeansData (): void {
    somStartPage.clickContinue()
    somWhatYouNeedPage.clickContinue()
    somResidencePage.selectOwnHome()
    somDependantsPage.selectDontHaveChildren()
    somMaintenancePage.selectDontPayMaintenance()
    somEmploymentPage.selectNotWorkingCurrently()
  }
}

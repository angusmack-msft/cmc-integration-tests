import { DefendantTaskListPage } from 'tests/citizen/defence/pages/defendant-task-list'

const defendantTaskListPage: DefendantTaskListPage = new DefendantTaskListPage()

export class DefendantSteps {

  selectTaskConfirmYourDetails (): void {
    defendantTaskListPage.selectTaskConfirmYourDetails()
  }

  selectTaskMoreTimeNeededToRespond (): void {
    defendantTaskListPage.selectTaskMoreTimeNeededToRespond()
  }

  selectTaskDoYouOweTheMoneyClaimed (): void {
    defendantTaskListPage.selectTaskDoYouOweTheMoneyClaimed()
  }

  selectTaskHowMuchMoneyBelieveYouOwe (): void {
    defendantTaskListPage.selectTaskHowMuchMoneyBelieveYouOwe()
  }

  selectTaskWhenWillYouPay (): void {
    defendantTaskListPage.selectTaskWhenWillYouPay()
  }

  selectTaskWhenDidYouPay (): void {
    defendantTaskListPage.selectTaskWhenDidYouPay()
  }

  selectTaskHowMuchPaidToClaiment (): void {
    defendantTaskListPage.selectTaskHowMuchPaidToClaiment()
  }

  selectTaskYourDefence (): void {
    defendantTaskListPage.selectTaskYourDefence()
  }

  selectCheckAndSubmitYourDefence (): void {
    defendantTaskListPage.selectTaskCheckAndSendYourResponse()
  }

  selectTaskFreeMediation (): void {
    defendantTaskListPage.selectTaskFreeMediation()
  }

}

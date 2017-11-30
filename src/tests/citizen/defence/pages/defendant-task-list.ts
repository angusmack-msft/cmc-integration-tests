import I = CodeceptJS.I

const I: I = actor()

export class DefendantTaskListPage {

  selectTaskConfirmYourDetails (): void {
    I.click('Confirm your details')
  }

  selectTaskMoreTimeNeededToRespond (): void {
    I.click('More time needed to respond')
  }

  selectTaskDoYouOweTheMoneyClaimed (): void {
    I.click('Do you owe the money claimed')
  }

  selectTaskHowMuchPaidToClaiment (): void {
    I.click('How much have you paid the claimant?')
  }

  selectTaskHowMuchMoneyBelieveYouOwe (): void {
    I.click('How much money do you believe you owe?')
  }

  selectTaskWhenWillYouPay (): void {
    I.click('When will you pay?')
  }

  selectTaskYourDefence (): void {
    I.click('Your defence')
  }

  selectTaskCheckAndSendYourResponse (): void {
    I.click('Check and submit your response')
  }

  selectTaskFreeMediation (): void {
    I.click('Free mediation')
  }

}

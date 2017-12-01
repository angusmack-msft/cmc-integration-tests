import I = CodeceptJS.I

const I: I = actor()

const buttons = {
  submit: 'input[value="Save and continue"]'
}

export class BankAccountsPage {

  clickContinue (): void {
    I.click(buttons.submit)
  }
}

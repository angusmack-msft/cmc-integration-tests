import I = CodeceptJS.I

const I: I = actor()

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantFreeMediationPage {

  chooseYes (): void {
    I.checkOption('Yes, I want help to resolve this dispute')
    I.click(buttons.submit)
  }
}

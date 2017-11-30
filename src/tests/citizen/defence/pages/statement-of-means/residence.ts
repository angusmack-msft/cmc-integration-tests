import I = CodeceptJS.I

const I: I = actor()

const fields = {
  ownHome: 'input[id="typeOWN_HOME"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class ResidencePage {

  selectOwnHome (): void {
    I.checkOption(fields.ownHome)
    I.click(buttons.submit)
  }
}

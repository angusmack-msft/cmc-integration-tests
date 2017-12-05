import I = CodeceptJS.I

const I: I = actor()

const fields = {
  dontHaveDebts: 'input[id="hasAnyDebtsfalse"]'
}

const buttons = {
  submit: 'input[value="Save and continue"]'
}

export class DebtsPage {

  selectDontHaveDebts (): void {
    I.checkOption(fields.dontHaveDebts)
    I.click(buttons.submit)
  }
}

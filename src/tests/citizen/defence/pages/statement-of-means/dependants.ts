import I = CodeceptJS.I

const I: I = actor()

const fields = {
  dontHaveChildren: 'input[id="hasAnyChildrenfalse"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DependantsPage {

  selectDontHaveChildren (): void {
    I.checkOption(fields.dontHaveChildren)
    I.click(buttons.submit)
  }
}

import I = CodeceptJS.I

const I: I = actor()

const fields = {
  day: 'input[id="date[day]"]',
  month: 'input[id="date[month]"]',
  year: 'input[id="date[year]"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantDobPage {

  enterDOB (dob): void {
    I.fillField(fields.day, dob.day)
    I.fillField(fields.month, dob.month)
    I.fillField(fields.year, dob.year)

    I.click(buttons.submit)
  }
}

import I = CodeceptJS.I

const I: I = actor()

const fields = {
  day: 'input[id="date[day]"]',
  month: 'input[id="date[month]"]',
  year: 'input[id="date[year]"]',
  claimNumber: 'input[id="claimNumber"]'
}

const buttons = {
  submit: 'input[type=submit]'
}

export class UpdateResponseDeadlinePage {

  open (): void {
    I.amOnCitizenAppPage('/response/your-dob')
  }

  updateDeadline (claimNumber: string, date): void {
    I.fillField(fields.claimNumber, claimNumber)

    I.fillField(fields.day, date.day)
    I.fillField(fields.month, date.month)
    I.fillField(fields.year, date.year)

    I.click(buttons.submit)

    I.see('Testing support')
  }
}

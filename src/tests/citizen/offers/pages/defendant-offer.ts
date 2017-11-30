import I = CodeceptJS.I

const I: I = actor()

const fields = {
  offerText: 'textarea[id=offerText]',
  completionOfferDate: {
    day: 'input[id=\'completionDate[day]\']',
    month: 'input[id=\'completionDate[month]\']',
    year: 'input[id=\'completionDate[year]\']'
  }
}

const buttons = {
  submit: 'input[type=submit]'
}

export class DefendantOfferPage {

  enterOffer (offerText: string, date): void {
    I.see('Make an offer')
    I.fillField(fields.offerText, offerText)
    I.fillField(fields.completionOfferDate.day, date.day)
    I.fillField(fields.completionOfferDate.month, date.month)
    I.fillField(fields.completionOfferDate.year, date.year)
    I.click(buttons.submit)
  }
}

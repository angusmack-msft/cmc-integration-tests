import * as testData from 'data/test-data'
import { DefendantOfferPage } from 'tests/citizen/offers/pages/defendant-offer'
import I = CodeceptJS.I

const I: I = actor()
const defendantOfferPage: DefendantOfferPage = new DefendantOfferPage()

const defendant = testData.defendant('civilmoneyclaims+notused@gmail.com')

export class OfferSteps {

  makeOffer (): void {
    defendantOfferPage.enterOffer(defendant.offer.offerText, defendant.offer.dateOfcompletionDate)
  }

  makeOfferFromDashboard (claimRef: string): void {
    I.click('My account')
    I.see('Your money claims account')
    I.click(claimRef)
    I.click('make an offer')
    this.makeOffer()
  }

}

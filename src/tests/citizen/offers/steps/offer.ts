import { offer } from 'data/test-data'
import { DefendantOfferPage } from 'tests/citizen/offers/pages/defendant-offer'
import I = CodeceptJS.I

const I: I = actor()
const defendantOfferPage: DefendantOfferPage = new DefendantOfferPage()

export class OfferSteps {

  makeOffer (): void {
    defendantOfferPage.enterOffer(offer.offerText, offer.completionDate)
  }

  makeOfferFromDashboard (claimRef: string): void {
    I.click('My account')
    I.see('Your money claims account')
    I.click(claimRef)
    I.click('make an offer')
    this.makeOffer()
  }

}

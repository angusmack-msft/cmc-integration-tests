import I = CodeceptJS.I
import { PartyType } from 'data/party-type'
import { ClaimSteps } from 'tests/citizen/claim/steps/claim'
import { DefenceSteps } from 'tests/citizen/defence/steps/defence'
import { DefenceType } from 'data/defence-type'

const I: I = actor()
const claimSteps: ClaimSteps = new ClaimSteps()
const defenceSteps: DefenceSteps = new DefenceSteps()

export class Helper {

  makeClaim (email: string): string {
    return claimSteps.makeAClaimAndSubmit(email, PartyType.INDIVIDUAL, PartyType.INDIVIDUAL)
  }

  async enterPinNumber (claimRef: string): Promise<void> {
    defenceSteps.enterClaimReference(claimRef)
    I.waitForText('Please enter your security code to continue')
    defenceSteps.enterClaimPin(claimRef)
  }

  finishResponse (defendantType: PartyType, defendant, defenceType: DefenceType = DefenceType.FULL_REJECTION_WITH_DISPUTE): void {
    I.waitForText('View the claim')
    defenceSteps.respondToClaim()
    defenceSteps.makeDefenceAndSubmit(defendantType, defendant, defenceType)
  }
}

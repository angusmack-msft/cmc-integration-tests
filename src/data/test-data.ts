const DEFAULT_PASSWORD = 'Password12'

export const claimant = function (email: string = 'civilmoneyclaims+notused@gmail.com') {
  return {
    email: email,
    password: DEFAULT_PASSWORD,
    name: 'John Smith',
    address: {
      line1: '23 Acacia Road',
      line2: 'some area',
      city: 'London',
      postcode: 'SW1A 1AA'
    },
    correspondenceAddress: {
      line1: '234 Acacia Road',
      line2: 'a really cool place',
      city: 'Edinburgh',
      postcode: 'EDE 1AC'
    },
    soleTraderName: 'Mr. Sole trader',
    companyName: 'Claimant company Inc',
    organisationName: 'United Nations',
    mobileNumber: '07700000001',
    dateOfBirth: {
      day: '26',
      month: '7',
      year: '1982'
    },
    claimAmount: {
      amount1: 10.00,
      amount2: 20.50,
      amount3: 50.00,
      claimFee: 25.00,
      getClaimTotal (): number {
        return this.amount1 + this.amount2 + this.amount3
      },
      getTotal (): number {
        return this.getClaimTotal() + this.claimFee
      }
    },
    claimReason: 'My reasons for the claim are that I am owed this money for a variety of reason, these being...'
  }
}

export const defendant = function (email: string) {
  return {
    email: email,
    password: DEFAULT_PASSWORD,
    name: 'Rose Smith',
    address: {
      line1: 'The University of Manchester',
      line2: 'Oxford Road',
      city: 'Manchester',
      postcode: 'M13 9PL'
    },
    soleTraderName: 'Sole fish trader',
    companyName: 'Defendant company Inc',
    organisationName: 'OrgBritish Red Cross',
    mobileNumber: '07700000002',
    dateOfBirth: {
      day: '26',
      month: '7',
      year: '1982'
    },
    mobile: '07873737575',
    defence: {
      partialRejection: {
        paidWhatIBelieveIOwe: {
          howMuchAlreadyPaid: 30.00,
          paidDate: {
            day: '1',
            month: '1',
            year: '2016'
          },
          explaination: 'I dont claimant full amount because'
        },
        claimAmountIsTooMuch: {
          howMuchIbelieveIOwe: 30.00,
          explaination: 'I owe this amount and not full amount because I...'
        },
        timeline: {
          event1: {
            date: 'Early Spring',
            description: 'Claimant accuses me of owing...'
          },
          event2: {
            date: 'Mid Spring',
            description: 'I asked the claimant for a reason and evidence why they are doing this.'
          }
        },
        impactOfDispute: {
          explanation: 'This dispute has affected me badly'
        }
      }
    },
    offer: {
      offerText: 'My Offer is that I can only afford, x, y, z and so will only pay £X amount',
      dateOfcompletionDate: {
        day: '1',
        month: '1',
        year: '2020'
      }
    }
  }
}

const DEFAULT_PASSWORD = 'Password12'

const claimant = function (email) {
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
      month: '07',
      year: '1982'
    },
    claimAmount: {
      amount1: '10',
      amount2: '20.50',
      amount3: '50',
      claimFee: '25'
    },
    claimReason: 'My reasons for the claim are that I am owed this money for a variety of reason, these being...'
  }
}

const defendant = function (email) {
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
      month: '07',
      year: '1982'
    },
    mobile : '07873737575',
    defence: {
      partialRejection: {
        paidWhatIBelieveIOwe: {
          howMuchAlreadyPaid: '30',
          paidDate: { day: '1', month: '1', year: '2016' },
          explaination: 'I dont claimant full amount because'
        },
        claimAmountIsTooMuch: {
          howMuchIbelieveIOwe: '30',
          explaination: 'I owe this amount and not full amount because I...'
        },
        timeline: {
          event1: { date: 'Early Spring', description: 'Claimant accuses me of owing...' },
          event2: { date: 'Mid Spring', description: 'I asked the claimant for a reason and evidence why they are doing this.' }
        },
        impactOfDispute: {
          explanation: 'This dispute has affected me badly'
        }
      }
    },
    offer: {
      offerText: 'My Offer is that I can only afford, x, y, z and so will only pay £X amount',
      dateOfcompletionDate: { day: '01', month: '01',year: '2020' }
    }
  }
}

export {
  claimant,
  defendant
}

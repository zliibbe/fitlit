import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let testHydration;
  let user1Hydration;
  let hydration;

  beforeEach(() => {
    testHydration = [
      { "userID": 1, "date": "2019/06/15", "numOunces": 37 },
      { "userID": 2, "date": "2019/06/15", "numOunces": 75 },
      { "userID": 3, "date": "2019/06/15", "numOunces": 47 },
      { "userID": 1, "date": "2019/06/16", "numOunces": 75 },
      { "userID": 1, "date": "2019/06/17", "numOunces": 47 },
      { "userID": 1, "date": "2019/06/18", "numOunces": 85 },
      { "userID": 1, "date": "2019/06/19", "numOunces": 42 },
      { "userID": 1, "date": "2019/06/20", "numOunces": 87 },
      { "userID": 1, "date": "2019/06/21", "numOunces": 94 }
  ];
      user1Hydration = [
        { "userID": 1, "date": "2019/06/15", "numOunces": 37 },
        { "userID": 1, "date": "2019/06/16", "numOunces": 75 },
        { "userID": 1, "date": "2019/06/17", "numOunces": 47 },
        { "userID": 1, "date": "2019/06/18", "numOunces": 85 },
        { "userID": 1, "date": "2019/06/19", "numOunces": 42 },
        { "userID": 1, "date": "2019/06/20", "numOunces": 87 },
        { "userID": 1, "date": "2019/06/21", "numOunces": 94 }
      ];

  hydration = new Hydration(testHydration, 1);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should be able to take in an array of objects that is hydrationData', () => {
    expect(hydration.dataByID).to.eql(user1Hydration)
  })

  it('should have a parameter that is a user id', () => {
    expect(hydration.userID).to.equal(1)
  })
})

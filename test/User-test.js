import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User', () => {
  let testUsers;
  let user;

  beforeEach(() => {
    testUsers = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }];

    user = new User(testUsers[0]);
  });


  it('should be a function', function() {
    expect(User).to.be.a('function')
  })

  it('should have a parameter to take in a userData object', function() {
    expect(user).to.eql(testUsers[0])
  })

  it('should hold the user properties from the data file', function() {
    expect(user.id).to.eql(1);
    expect(user.name).to.eql('Luisa Hane');
    expect(user.address).to.eql('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
    expect(user.email).to.eql('Diana.Hayes1@hotmail.com');
    expect(user.strideLength).to.eql(4.3);
    expect(user.dailyStepGoal).to.eql(10000);
    expect(user.friends).to.eql([16, 4, 8]);
  })

  it('should have a method that returns a users first name only', function() {
    expect(user.returnFirstName()).to.equal('Luisa');
  })

  describe('Hydration', () => {
    let testHydration;

    beforeEach(() => {
      testHydration = [
        { "userID": 1, "date": "2019/06/15", "numOunces": 37 },
        { "userID": 2, "date": "2019/06/15", "numOunces": 75 },
        { "userID": 3, "date": "2019/06/15", "numOunces": 47 }
      ]
  })

    it('should have a method that calculates total average water consumed', function() {
      expect(user.totalAvgWater()).to.equal(159)
    })
})

//  Hydration should have a method that calculates total average water consumed
//  Hydration should have a method that calculates daily average water consumed
//  Hydration should have a method that calculated weekly average water consumed
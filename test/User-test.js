import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';
import Sleep from '../src/Sleep';

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
    let hydration;

    beforeEach(() => {
      testHydration = [
        { "userID": 1, "date": "2019/06/15", "numOunces": 37 },
        { "userID": 1, "date": "2019/06/16", "numOunces": 75 },
        { "userID": 1, "date": "2019/06/17", "numOunces": 47 },
        { "userID": 1, "date": "2019/06/18", "numOunces": 85 },
        { "userID": 1, "date": "2019/06/19", "numOunces": 42 },
        { "userID": 1, "date": "2019/06/20", "numOunces": 87 },
        { "userID": 1, "date": "2019/06/21", "numOunces": 94 }
      ];

      hydration = new Hydration(testHydration, 1);
  })

    it('should have a method that calculates total average water consumed', function() {
      expect(user.totalAvgWater(hydration)).to.equal(67)
    })

    it('should have a method that returns the daily water consumed for a specific day', function() {
      expect(user.dailyWater(hydration, "2019/06/15")).to.equal(37)
    })

    it('should have a method that calculated weekly water consumed', function() {
      expect(user.weeklyWater(hydration, ["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"])).to.eql([37, 75, 47, 85, 42, 87, 94])
    })
  })
  describe('Sleep', () => {
    let testSleep;
    let sleep;

    beforeEach(() => {
      testSleep = [
        { "userID": 2, "date": "2019/06/15", "hoursSlept": 7, "sleepQuality": 4.7 },
        { "userID": 2, "date": "2019/06/16", "hoursSlept": 7.5, "sleepQuality": 3.8 },
        { "userID": 2, "date": "2019/06/17", "hoursSlept": 5.7, "sleepQuality": 3 },
        { "userID": 2, "date": "2019/06/18", "hoursSlept": 10.8, "sleepQuality": 3.2 },
        { "userID": 2, "date": "2019/06/19", "hoursSlept": 9.6, "sleepQuality": 2.5 },
        { "userID": 2, "date": "2019/06/21", "hoursSlept": 4.3, "sleepQuality": 4.8 },
        { "userID": 2, "date": "2019/06/22", "hoursSlept": 4.8, "sleepQuality": 3.3 },
        { "userID": 1, "date": "2019/06/15", "hoursSlept": 6.1, "sleepQuality": 2.2 },
        { "userID": 1, "date": "2019/06/16", "hoursSlept": 4.1, "sleepQuality": 3.8 },
        { "userID": 1, "date": "2019/06/17", "hoursSlept": 8, "sleepQuality": 2.6 },
        { "userID": 1, "date": "2019/06/18", "hoursSlept": 10.4, "sleepQuality": 3.1 },
        { "userID": 1, "date": "2019/06/19", "hoursSlept": 10.7, "sleepQuality": 1.2 },
        { "userID": 1, "date": "2019/06/20", "hoursSlept": 9.3, "sleepQuality": 1.2 },
        { "userID": 1, "date": "2019/06/21", "hoursSlept": 7.8, "sleepQuality": 4.2 }
      ];

      sleep = new Sleep(testSleep, 2);
    });

    it('should have a method that returns the total daily hours slept', () => {
      expect(user.totalAvgDailyHoursSlept(testSleep, 2)).to.equal(7.1)
    })

    it('should have a method that calculates the average sleep quality per day over all time', () => {
      expect(user.avgAllTimeSleepQuality(testSleep, 2)).to.equal(3.61)
    })

    it('should have a method that returns the sleep quality for a specific day', () => {
      expect(user.dailySleepQuality(testSleep, "2019/06/15")).to.equal(4.7)
    })

    it('should have a method that returns the hours slept for a specific day', () => {
      expect(dailyHoursSlept()).to.equal(7)
    })

    it('should have a method that displays the daily hours slept in a week', () => {
      expect(sevenDaysOfHoursSlept()).to.equal(7, 7.5, 5.7, 10.8, 9.6, 4.3, 4.8) 
    })

    it('should have a method that displays the daily quality of hours slept in a week', () => {
      expect(sevenDaysOfSleepQuality()).to.equal(4.7, 3.8, 3, 3.2, 2.5, 4.8, 3.3)
    })

    it('should have a method that calculates the average sleep quality for all users', () => {
      expect(totalAvgSleepQuality()).to.equal(3.11428571)
    })
  })
})
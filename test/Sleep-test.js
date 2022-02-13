import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
  let sleep;
  let testSleep;

  beforeEach(() => {
    testSleep = [
      { "userID": 2, "date": "2019/06/15", "hoursSlept": 7, "sleepQuality": 4.7 },
      { "userID": 2, "date": "2019/06/16", "hoursSlept": 7.5, "sleepQuality": 3.8 },
      { "userID": 2, "date": "2019/06/17", "hoursSlept": 5.7, "sleepQuality": 3 },
      { "userID": 2, "date": "2019/06/18", "hoursSlept": 10.8, "sleepQuality": 3.2 },
      { "userID": 2, "date": "2019/06/19", "hoursSlept": 9.6, "sleepQuality": 2.5 },
      { "userID": 2, "date": "2019/06/21", "hoursSlept": 4.3, "sleepQuality": 4.8 },
      { "userID": 2, "date": "2019/06/22", "hoursSlept": 4.8, "sleepQuality": 3.3 }
    ];
  sleep = new Sleep();
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a.a('function')
  })

  it('should be able to take in an array of objects that is the sleepData', () => {
    expect(sleep.sleepData).to.eql(testSleep)
  })

})
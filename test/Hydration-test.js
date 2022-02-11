import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let testHydration;
  let hydration;

  beforeEach(() => {
    testHydration = [
      { "userID": 1, "date": "2019/06/15", "numOunces": 37 }, 
      { "userID": 2, "date": "2019/06/15", "numOunces": 75 }, 
      { "userID": 3, "date": "2019/06/15", "numOunces": 47 }
  ]
  hydration = new Hydration();
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

})

// Hydration should be a class DONE
  //  Hydration should take in user id as the parameter
//  Hydration should have a method that calculates total average water consumed
//  Hydration should have a method that calculates daily average water consumed
//  Hydration should have a method that calculated weekly average water consumedIteration 3 - Hydration


// Data
// Create classes and methods that can calculate:

// For a user(identified by their userID - this is the same for all methods requiring a specific user’s data), the average fluid ounces consumed per day for all time
// For a user, how many fluid ounces they consumed for a specific day(identified by a date)
// For a user, how many fluid ounces of water consumed each day over the course of a week(7 days) - return the amount for each day
// You have to decide which classes should contain each method.Think about whose responsibility it is to own the method.



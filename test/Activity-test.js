import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Activity from '../src/Activity';

describe('Activity', () => {
  let activity;
  let testActivity;
  let testActivitybyUserID;

  beforeEach(() => {
    testActivity = [
      { "userID": 1, "date": "2019/06/15", "numSteps": 3577, "minutesActive": 140, "flightsOfStairs": 16 },
      { "userID": 1, "date": "2019/06/16", "numSteps": 6637, "minutesActive": 175, "flightsOfStairs": 36 },
      { "userID": 1, "date": "2019/06/17", "numSteps": 14329, "minutesActive": 168, "flightsOfStairs": 18 },
      { "userID": 1, "date": "2019/06/18", "numSteps": 4419, "minutesActive": 165, "flightsOfStairs": 33 },
      { "userID": 1, "date": "2019/06/19", "numSteps": 8429, "minutesActive": 275, "flightsOfStairs": 2 },
      { "userID": 1, "date": "2019/06/20", "numSteps": 14478, "minutesActive": 140, "flightsOfStairs": 12 },
      { "userID": 1, "date": "2019/06/21", "numSteps": 6760, "minutesActive": 135, "flightsOfStairs": 6 },
      { "userID": 1, "date": "2019/06/22", "numSteps": 10289, "minutesActive": 119, "flightsOfStairs": 6 }
    ];
    testActivitybyUserID = [
      {"userID": 2, "date": "2019/06/15", "numSteps": 4294, "minutesActive": 138, "flightsOfStairs": 10},
      {"userID": 2, "date": "2019/06/16", "numSteps": 4112, "minutesActive": 220, "flightsOfStairs": 37},
      {"userID": 2, "date":"2019/06/17", "numSteps":13750, "minutesActive": 65, "flightsOfStairs": 4},
      {"userID": 2,"date": "2019/06/18", "numSteps": 4662, "minutesActive": 181, "flightsOfStairs": 31},
      {"userID": 2, "date": "2019/06/19", "numSteps": 9858, "minutesActive": 243, "flightsOfStairs": 44},
      {"userID": 2, "date": "2019/06/20", "numSteps": 8153, "minutesActive": 74, "flightsOfStairs": 10},
      {"userID": 2, "date": "2019/06/21", "numSteps": 10225, "minutesActive": 174, "flightsOfStairs": 26},
      {"userID": 2, "date": "2019/06/22", "numSteps": 3605, "minutesActive": 124, "flightsOfStairs": 31},
      {"userID": 1, "date": "2019/06/15", "numSteps": 3577, "minutesActive": 140, "flightsOfStairs": 16 },
      {"userID": 1, "date": "2019/06/16", "numSteps": 6637, "minutesActive": 175, "flightsOfStairs": 36 },
      {"userID": 1, "date": "2019/06/17", "numSteps": 14329, "minutesActive": 168, "flightsOfStairs": 18 },
      {"userID": 1, "date": "2019/06/18", "numSteps": 4419, "minutesActive": 165, "flightsOfStairs": 33 },
      {"userID": 1, "date": "2019/06/19", "numSteps": 8429, "minutesActive": 275, "flightsOfStairs": 2 },
      {"userID": 1, "date": "2019/06/20", "numSteps": 14478, "minutesActive": 140, "flightsOfStairs": 12 },
      {"userID": 1, "date": "2019/06/21", "numSteps": 6760, "minutesActive": 135, "flightsOfStairs": 6 },
      {"userID": 1, "date": "2019/06/22", "numSteps": 10289, "minutesActive": 119, "flightsOfStairs": 6 }
    ];
    acticity = new Activity(testActivitybyUserID, 1);
  });
  
})

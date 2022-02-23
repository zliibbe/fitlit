class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  returnFirstName() {
    const name = this.name.split(' ');
    return name[0];
  }

  totalAvgWater(hydration) {
    let totalOunces = hydration.hydrationData.reduce((acc, x) => {
      return acc + x.numOunces
    }, 0)
    return Math.round(totalOunces / hydration.hydrationData.length)
  }

  dailyWater(hydration, date) {
    let dayWater = hydration.hydrationData.find(x => {
      if(x.date === date) {
        return x
      }
    })
    return dayWater.numOunces
  }

  weeklyWater(hydration, dates) {
    let weeklyData = dates.map(date => {
      return this.dailyWater(hydration, date)
    })
    return weeklyData
  }

  totalAvgDailyHoursSlept(sleepData) {
    let total = sleepData.reduce((acc, userObj) => {
      acc += userObj.hoursSlept
      return acc
    }, 0)
    return total / 7
  }

  avgAllTimeSleepQuality(sleepData) {
    let total = sleepData.reduce((acc, userObj) => {
      acc += userObj.sleepQuality
      return acc
    }, 0);
    return Math.round((total / sleepData.length) * 100) / 100
  }

  dailySleepQuality(sleepData, date) {
    let dailyQuality = sleepData.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyQuality.sleepQuality
  }

  dailyHoursSlept(sleepData, date) {
    let dailyHoursSlept = sleepData.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyHoursSlept.hoursSlept;
  }

  getSevenDaysOfSleepQuantity(sleepData, dates) {
    return sleepData.map(userObj => {
      dates.includes(userObj.date)
      return userObj.hoursSlept
    })
  }

  getSevenDaysOfSleepQuality(sleepData, dates) {
    return sleepData.map(userObj => {
      dates.includes(userObj.date)
      return userObj.sleepQuality
    })
  }
}
export default User;

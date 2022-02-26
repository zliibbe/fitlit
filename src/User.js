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

  getFirstName() {
    const name = this.name.split(' ');
    return name[0];
  }

  getTotalAvgWater(hydration) {
    let totalOunces = hydration.dataByID.reduce((acc, hydrationObj) => {
      return acc + hydrationObj.numOunces
    }, 0)
    return Math.round(totalOunces / hydration.dataByID.length)
  }

  getDailyWater(hydration, date) {
    let dayWater = hydration.dataByID.find(hydrationObj => {
      if(hydrationObj.date === date) {
        return hydrationObj
      }
    })
    return dayWater.numOunces
  }

  getWeeklyWater(hydration, dates) {
    let weeklyData = dates.map(date => {
      return this.getDailyWater(hydration, date)
    })
    return weeklyData
  }

  getTotalAvgDailyHoursSlept(sleep) {
    let total = sleep.dataByID.reduce((acc, userObj) => {
      acc += userObj.hoursSlept
      return acc
    }, 0)
    return Math.round((total / sleep.dataByID.length) * 100) / 100
  }

  getAvgAllTimeSleepQuality(sleep) {
    let total = sleep.dataByID.reduce((acc, userObj) => {
      acc += userObj.sleepQuality
      return acc
    }, 0);
    return Math.round((total / sleep.dataByID.length) * 100) / 100
  }

  getDailySleepQuality(sleep, date) {
    let dailyQuality = sleep.dataByID.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyQuality.sleepQuality
  }

  getDailyHoursSlept(sleep, date) {
    let dailyHoursSlept = sleep.dataByID.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyHoursSlept.hoursSlept;
  }

  getSevenDaysOfSleepQuantity(sleep, dates) {
    return sleep.dataByID.map(userObj => {
      dates.includes(userObj.date)
      return userObj.hoursSlept
    })
  }

  getSevenDaysOfSleepQuality(sleep, dates) {
    return sleep.dataByID.map(userObj => {
      dates.includes(userObj.date)
      return userObj.sleepQuality
    })
  }
}
export default User;

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
    let totalOunces = hydration.hydrationData.reduce((acc, x) => {
      return acc + x.numOunces
    }, 0)
    return Math.round(totalOunces / hydration.hydrationData.length)
  }

  getDailyWater(hydration, date) {
    let dayWater = hydration.hydrationData.find(x => {
      if(x.date === date) {
        return x
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

  getTotalAvgDailyHoursSlept(sleepData) {
    let total = sleepData.dataByID.reduce((acc, userObj) => {
      acc += userObj.hoursSlept
      return acc
    }, 0)
    return Math.round((total / sleepData.dataByID.length) * 100) / 100
  }

  getAvgAllTimeSleepQuality(sleepData) {
    let total = sleepData.dataByID.reduce((acc, userObj) => {
      acc += userObj.sleepQuality
      return acc
    }, 0);
    return Math.round((total / sleepData.dataByID.length) * 100) / 100
  }

  getDailySleepQuality(sleepData, date) {
    let dailyQuality = sleepData.dataByID.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyQuality.sleepQuality
  }

  getDailyHoursSlept(sleepData, date) {
    let dailyHoursSlept = sleepData.dataByID.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyHoursSlept.hoursSlept;
  }

  getSevenDaysOfSleepQuantity(sleepData, dates) {
    return sleepData.dataByID.map(userObj => {
      dates.includes(userObj.date)
      return userObj.hoursSlept
    })
  }

  getSevenDaysOfSleepQuality(sleepData, dates) {
    return sleepData.dataByID.map(userObj => {
      dates.includes(userObj.date)
      return userObj.sleepQuality
    })
  }
}
export default User;

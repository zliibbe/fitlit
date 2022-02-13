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
  
  totalAvgDailyHoursSlept(testSleep, id) {
    let hours = testSleep.filter(element => {
      if(element.userID === id) {
        return element
      }
    })
    let total = 0;
    hours.forEach(userObj => {
      total += userObj.hoursSlept
    });
    return total / 7
  }

  avgAllTimeSleepQuality(testSleep, id) {
    let usersTotalSleep = testSleep.filter(element => {
      if(element.userID === id) {
        return element
      }
    })
    let total = 0;
    usersTotalSleep.forEach(userObj => {
      total += userObj.sleepQuality
  })
    let newTotal = total / usersTotalSleep.length
    return Math.round(newTotal * 100) / 100
  }

  dailySleepQuality() {

  }

  dailyHoursSlept() {

  }

  sevenDaysOfHoursSlept() {

  }

  sevenDaysOfSleepQuality() {

  }

  totalAvgSleepQuality() {

  }
}

export default User;
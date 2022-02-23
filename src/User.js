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

  //last available/most-recent data for that User
  dailyHoursSlept(sleepData, date) {
    let dailyHoursSlept = sleepData.find(sleepEntryObj => {
      sleepEntryObj.date === date
      return sleepEntryObj
    })
    return dailyHoursSlept.hoursSlept;
  }

  //input: sleepData & date range- array of date strings ><
  //output: array/object of seven days sleep quality
  // sevenDaysOfHoursSlept(sleepData, dates, id) {
  //   sleepData.filter()
  // }



  // const result = sleepData.filter({
    //   if (sleepData.userID === id) {
    //     if (sleepData.date === dates) {}
    //   }
    // })
    //
    //
    // ((acc, date) => {
    //   //key is date e.g."2019/06/15"
    //   sleepData[i].sleepQuality //value of key in new object
    //   return acc
    // }, [])
    // return result
    /*
    const movieObj = () => {
  const result = beyonce.movies.reduce((acc, movie) => {
    acc[movie.title] = {rating: movie.rating, avgRating: avgRating()}
    return acc
  }, {})
  return result
}
     console.log(movieObj())

    */
    // let hoursSleptByDayForSeven = {};

    // sleepData.forEach(element => {
    //     if (element.userID === id) {
    //         sleepData.forEach(element => {
    //           hoursSleptByDayForSeven[element.date] = element.sleepQuality
    //         })
    //       // console.log(hoursSleptByDayForSeven)
    //       return hoursSleptByDayForSeven;
    //     }
    //   })
    // }

  // sevenDaysOfSleepQuality(sleepData, startDate) {
  //     // const output = sleepData.filter(data => data.userID) {
  //     //   if(data.userID === this.id) {
  //
  //     //   }}
  //
  //       const startDate = sleepData.findIndex(sleepEntry => sleepEntry.date === startDate) {
  //         return sleepData.map(sleepEntry => sleepEntry.sleepQuality).slice(startDate, startDate + 7)
  //       }
  //     }


  totalAvgSleepQuality(sleepData) {
    let sleepQualityTotal = 0;
    let avgSleepQuality = sleepData.forEach(element => {
      sleepQualityTotal += element.sleepQuality
    });
    return Math.round((sleepQualityTotal / sleepData.length)*100) / 100
  }
}
export default User;

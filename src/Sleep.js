class Sleep{
  constructor(data, id) {
    this.allData = data;
    this.sleepData = data.filter((data) => {
      if(data.userID === id) {
        return data
      }
    })
    this.userID = id;
  }
  totalAvgSleepQuality() {
    let totalSleepQuality =  this.allData.reduce((acc, data) => {
      acc += data.sleepQuality
      return acc
    }, 0)
    return Math.round((totalSleepQuality / this.allData.length) * 100) / 100
  }
}

export default Sleep

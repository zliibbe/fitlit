class Activity{
  constructor(data, id) {
    this.allData = data;
    this.dataByID = data.filter((data) => {
      if (data.userID === id) {
      return data
      }
    });
    this.userID = id;
  }
  filterByDate(date) {
    return this.allData.filter(datum => {
      if (datum.date === date) {
        return datum
      }
    });
  }
  getAvgStairsByDate(date) {
    let totalFlights = this.filterByDate(date).reduce((acc, datum) => {
      acc += datum.flightsOfStairs
      return acc
    }, 0);
    return Math.round(totalFlights / this.filterByDate(date).length)
  }
  getAvgStepsbyDate(date) {
    let totalSteps = this.filterByDate(date).reduce((acc, datum) => {
      acc += datum.numSteps
      return acc
    }, 0)
    return Math.round(totalSteps / this.filterByDate(date).length)
  }
  getAvgMinutesActiveByDate(date) {
    let totalSteps = this.filterByDate(date).reduce((acc, datum) => {
      acc += datum.minutesActive
      return acc
    }, 0)
    return Math.round(totalSteps / this.filterByDate(date).length)
  }
}

export default Activity;

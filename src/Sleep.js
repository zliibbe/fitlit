class Sleep{
  constructor(data, id) {
    this.sleepData = data.filter((data) => {
      if(data.userID === id) {
        return data
      }
    })
    this.userID = id;
  }
}
export default Sleep

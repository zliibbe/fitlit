class Hydration{
  constructor(data, id) {
    this.hydrationData = data.filter((data) => {
      if(data.userID === id) {
        return data
      }
    })
    this.userID = id;
  }
}

export default Hydration
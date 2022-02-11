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
    return totalOunces / hydration.hydrationData.length
  }
}

export default User;
import User from "./User";

class UserRepository {
  constructor(userData) {
    this.users = userData.map(user => {
      return new User(user)
    });
  }

  getUserId(id) {
    return this.users.find(user => user.id)
  }

  getAvgStepGoal() {
    const usersStepGoals = this.users.map(user => user.dailyStepGoal);
    const totalStepsGoal = usersStepGoals.reduce((init, curr) => {
      return (init + curr)
    })
    return totalStepsGoal / this.users.length
  }
}

export default UserRepository;
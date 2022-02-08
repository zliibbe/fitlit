import User from "./User";

class UserRepository {
  constructor(userData) {
    this.users = userData.map(user => {
      return new User(user)
    });
  }

  getUserId() {

  }

  getAvgStepGoal() {

  }
}

export default UserRepository;
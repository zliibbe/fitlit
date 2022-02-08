import { expect } from 'chai';
import UserRepository from '../src/UserRepository';


describe('User Repository', () => {
  let testUsers;
  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
    
    testUsers = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }]
  }) 

  it('should be a function', function () {
    expect(userRepository).to.be.a('function');
  });

  it('should put able to take in a collection of users', function () {
    expect(userRepository.users).to.be.a('object');
  })

  it('should be able to take in a specific dataset of users', function () {
    expect(userRepository.users).to.be.eql(testUsers);
  });

  it('should have a method to return the user data based on the user ID', function() {
    expect(userRepository.getUser(1)).to.not.eql(testUsers[1]);
    expect(userRepository.getUser(1)).to.be.eql(testUsers[0]);
  })

  it('should have a method that calculates the average step goal amongst all users', function() {
    expect(userRepository.getAvgStepGoal()).to.not.eql(20000);
    expect(userRepository.getAvgStepGoal()).to.be.eql(6666.67);
  })
}

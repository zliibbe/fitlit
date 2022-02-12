// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import {fetchUserData, fetchSleepData, fetchHydrationData} from './apiCalls.js';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';

//=====================================================
//imports?
//variable initiation ?


//querySelectors
let userInfoCard = document.querySelector('.user');
let userName = document.querySelector('#user-name');
let userDailyStepGoal = document.querySelector('#user-daily-step-goal');
let userID = document.querySelector('#user-id');
let userAddress = document.querySelector('#user-address');
let userEmail = document.querySelector('#user-email');
let userStrideLength = document.querySelector('#user-stride-length');
let userFriends = document.querySelector('#user-friends');
let moreInfoBtn = document.querySelector('#more-info');
let infoDropdownContent = document.querySelector('#info-dropdown');
let stepGoalComparison = document.querySelector('#step-goal-comparison');
let hydrationTitle = document.querySelector('#hydration');
let hydrationDropdown = document.querySelector('#hydrationDropdown');


//data
// let allUsers = new UserRepository(userData);



//functions


// const getData = () => {
//   let promises = Promise.all([fetchUserData(), fetchSleepData(),fetchhydrationData(),
//   fetchActivityData()]).then(data => console.log(data)})
// }
// console.log(fetchUserData());
// console.log(users);
// getData();

let allUsers;
let luisa;

const getRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
}

const loadUserInfo = () => {
    // let randomIndex = getRandomNumber(userData)
    fetchData().then(data => {
      allUsers = new UserRepository(data[0].userData)
      luisa = allUsers.users[0]
      console.log(allUsers.users[0])
      generateUserInfoCard(luisa)
    })
    console.log(allUsers)
    // let randomUser = userData[randomIndex];
    // generateUserInfoCard(luisa);
}

const fetchData = () => {
  return Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()])
}

const generateUserInfoCard = (user) => {
    userName.innerText = user.returnFirstName();
    userDailyStepGoal.innerText = user.dailyStepGoal;
    userID.innerText = user.id;
    userAddress.innerText = user.address;
    userEmail.innerText = user.email;
    userStrideLength.innerText = user.strideLength;
    userFriends.innerText = user.friends;
    stepGoalComparison.innerText = allUsers.getAvgStepGoal();
}

const displayHydration = () => {
    git
}

const toggleHidden = (element) => {
    element.classList.toggle("hidden");
}

const infoButton = () => {
    toggleHidden(infoDropdownContent);
}

//eventListeners
window.addEventListener('load', loadUserInfo)
moreInfoBtn.addEventListener('click', infoButton)
hydrationTitle.addEventListener('click', displayHydration);
/*
For your user (or any user you choose), add:

A display to show how much water they have consumed today (these displays are often called “widgets” in the FE tech world)
A display to show much water they have consumed each day over the course of the latest week*/

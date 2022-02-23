// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/user-icon.png';
import {fetchUserData, fetchSleepData, fetchHydrationData} from './apiCalls.js';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

//imports
import userData from './data/users';
import User from './User';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {dailyHydration, weeklyHydration, dailySleepQual, dailySleepQuan, weeklySleepQual, weeklySleepQuan} from './Chart.js'

//=====================================================
//variable initiation
let allUsers;
let hydrationUser;
let ourUser;
let ourUserID;
let sleepUser;


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
let allTimeAvgHydrationData = document.querySelector('#all-time-average-hydration-data')
let avgSleepDisplay = document.querySelector('#avg-sleep-data-display')


//functions

const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const addDataToCharts = (chart, label, data) => {
    chart.data.labels = label;
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
    });
    chart.update();
}


const fetchData = (id) => {
  return Promise.all([fetchUserData(), fetchSleepData(), fetchHydrationData()])
  .then(data => {
    allUsers = new UserRepository(data[0].userData);
    hydrationUser = new Hydration(data[2].hydrationData, id);
    sleepUser = new Sleep(data[1].sleepData, id);
   })
  .then(() => {ourUser = allUsers.users[id]})
  //DOM
  .then(() => generateUserInfoCard(ourUser))
  .then(() => generateHydrationCard(hydrationUser, ourUser))
  .then(() => generateSleepCard(sleepUser, ourUser))
}

//Data/DOM; initial function on Load
const loadUserInfo = () => {
  fetchData(getRandomNumber(50));
}

//DOM
const generateUserInfoCard = (user) => {
    userName.innerText += user.returnFirstName();
    userDailyStepGoal.innerText += user.dailyStepGoal;
    userID.innerText += user.id;
    userAddress.innerText += user.address;
    userEmail.innerText += user.email;
    userStrideLength.innerText += user.strideLength;
    userFriends.innerText += user.friends;
    stepGoalComparison.innerText += allUsers.getAvgStepGoal();
}

//DOM
const generateHydrationCard = (hydration, user) => {
  let day = "2019/06/15"
  let week = ["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"]
  let dailyWater = user.dailyWater(hydration, day)
  let weeklyWater = user.weeklyWater(hydration, week)
  allTimeAvgHydrationData.innerText = user.totalAvgWater(hydration);
  addDataToCharts(dailyHydration, [day], [dailyWater])
  addDataToCharts(weeklyHydration, week, weeklyWater)
}

const generateSleepCard = (sleep, user) => {
  let day = "2019/06/15"
  let week = ["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"]
  let dailySleepQuality = user.dailySleepQuality(sleep, day);
  let dailyHoursSlept = user.dailyHoursSlept(sleep, day);
  let weeklySleepQuality = user.getSevenDaysOfSleepQuality(sleep, week);
  let weeklySleepQuantity = user.getSevenDaysOfSleepQuantity(sleep, week);
  let avgSleepQuality = user.avgAllTimeSleepQuality(sleep);
  let avgSleepQuantity = user.totalAvgDailyHoursSlept(sleep);
  addDataToCharts(dailySleepQual, [day], [dailySleepQuality]);
  addDataToCharts(dailySleepQuan, [day], [weeklySleepQuantity]);
  addDataToCharts(weeklySleepQual, week, weeklySleepQuality);
  addDataToCharts(weeklySleepQuan, week, weeklySleepQuantity);
  avgSleepDisplay.innerHTML = `
    <p>Average Sleep Quality</p>
    <p>${avgSleepQuality}</p>
    <p>Average Hours Slept per Night</p>
    <p>${avgSleepQuantity}</p>
  `
}

const displayHydration = () => {
    toggleHidden(hydrationDropdown);
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

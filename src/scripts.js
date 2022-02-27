import './css/styles.css';
import './images/user-icon.png';
import {fetchData, postData} from './apiCalls.js';
import UserRepository from './UserRepository';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {domUpdates} from './domUpdates';
import {dailyHydration, weeklyHydration, dailySleepQual, dailySleepQuan, weeklySleepQual, weeklySleepQuan} from './Chart.js'

//variable initiation
let allUsers;
let hydrationUser;
let ourUser;
let sleepUser;

let moreInfoBtn = document.querySelector('#more-user-info');
let enterNewDataBtn = document.querySelector('.add-new-data');
let backToMainBtn = document.querySelector('.back-to-main')

//functions
const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const getTheData = (id) => {
  return Promise.all([fetchData('users'), fetchData('sleep'), fetchData('hydration')])
  .then(data => {
    allUsers = new UserRepository(data[0].userData);
    hydrationUser = new Hydration(data[2].hydrationData, id);
    sleepUser = new Sleep(data[1].sleepData, id);
    ourUser = allUsers.getUserId(id);
   })
  //DOM
  .then(() => domUpdates.generateUserInfoCard(ourUser, allUsers))
  .then(() => domUpdates.generateHydrationCard(hydrationUser, ourUser))
  .then(() => domUpdates.generateSleepCard(sleepUser, ourUser))
}

//Data/DOM; initial function on Load
const loadUserInfo = () => {
  getTheData(getRandomNumber(50));
}

//eventListeners
window.addEventListener('load', loadUserInfo)
moreInfoBtn.addEventListener('click', domUpdates.infoButton)
enterNewDataBtn.addEventListener('click', domUpdates.toggleDataDisplay)
backToMainBtn.addEventListener('click', domUpdates.toggleDataDisplay)


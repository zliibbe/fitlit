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
let backToMainBtn = document.querySelector('.back-to-main');
let submitSleep = document.querySelector('.sleep-inputs');
let submitHydro = document.querySelector('.hydration-inputs');
let sleepDateInput = document.querySelector('.sleep-date-input');
let sleepHoursInput = document.querySelector('.sleep-hours-input');
let sleepQualityInput = document.querySelector('.sleep-quality-input');
let hydroDateInput = document.querySelector('.hydration-date-input');
let hydroNumOzInput = document.querySelector('.hydration-num-oz-input');


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
  .then(() => domUpdates.generateUserInfoCard(ourUser, allUsers))
  .then(() => domUpdates.generateHydrationCard(hydrationUser, ourUser))
  .then(() => domUpdates.generateSleepCard(sleepUser, ourUser))
}

const postNewSleepData = (e) => {
  e.preventDefault();
  const newSleepData = {
    userID: ourUser.id,
    date: sleepDateInput.value.replaceAll('-', '/'),
    hoursSlept: parseInt(sleepHoursInput.value),
    sleepQuality: parseInt(sleepQualityInput.value),
  }
  let newSleep;
  Promise.all([postData("sleep", newSleepData)])
  .then(() => fetchData("sleep"))
  .then((data) => newSleep = new Sleep(data.sleepData, ourUser.id))
  .then(() => domUpdates.generateSleepCard(newSleep, ourUser))
  e.target.reset();
}

const postNewHydroData = (e) => {
  e.preventDefault();
  const newHydroData = {
    userID: ourUser.id,
    date: hydroDateInput.value.replaceAll('-', '/'),
    numOunces: parseInt(hydroNumOzInput.value)
  }
  let newHydration;
  Promise.all([postData("hydration", newHydroData)])
  .then(() => fetchData("hydration"))
  .then(data => newHydration = new Hydration(data.hydrationData, ourUser.id))
  .then(() => domUpdates.generateHydrationCard(newHydration, ourUser));
  e.target.reset();
}

const loadUserInfo = () => {
  getTheData(getRandomNumber(50));
}

//eventListeners
window.addEventListener('load', loadUserInfo)
moreInfoBtn.addEventListener('click', domUpdates.infoButton)
enterNewDataBtn.addEventListener('click', domUpdates.toggleDataDisplay)
backToMainBtn.addEventListener('click', domUpdates.toggleDataDisplay)
submitSleep.addEventListener('submit', postNewSleepData)
submitHydro.addEventListener('submit', postNewHydroData)

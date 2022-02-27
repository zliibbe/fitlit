import UserRepository from './UserRepository';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {dailyHydration, weeklyHydration, dailySleepQual, dailySleepQuan, weeklySleepQual, weeklySleepQuan} from './Chart.js'


//querySelectors
let userInfoCard = document.querySelector('.user');
let userName = document.querySelector('#user-name');
let userDailyStepGoal = document.querySelector('#user-daily-step-goal');
let userID = document.querySelector('#user-id');
let userAddress = document.querySelector('#user-address');
let userEmail = document.querySelector('#user-email');
let userStrideLength = document.querySelector('#user-stride-length');
let userFriends = document.querySelector('#user-friends');
let infoDropdownContent = document.querySelector('#info-dropdown');
let stepGoalComparison = document.querySelector('#step-goal-comparison');
let allTimeAvgHydrationData = document.querySelector('#all-time-average-hydration-data')
let avgSleepDisplay = document.querySelector('#avg-sleep-data-display');
let dataCards = document.querySelectorAll('.data');
let addNewDataBtn = document.querySelector('.add-new-data');
let dataEntryForms = document.querySelector('.data-entry-forms');
let backToMainBtn = document.querySelector('.back-to-main');


let domUpdates = {
  generateUserInfoCard(user, userRepo) {
      userName.innerText = user.getFirstName();
      userDailyStepGoal.innerText += user.dailyStepGoal;
      userID.innerText += user.id;
      userAddress.innerText += user.address;
      userEmail.innerText += user.email;
      userStrideLength.innerText += user.strideLength;
      userFriends.innerText += user.friends;
      stepGoalComparison.innerText += userRepo.getAvgStepGoal();
  },
  generateHydrationCard(hydration, user) {
    let day = "2019/06/15"
    let week = ["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"]
    let dailyWater = user.getDailyWater(hydration, day)
    let weeklyWater = user.getWeeklyWater(hydration, week)
    allTimeAvgHydrationData.innerText = user.getTotalAvgWater(hydration);
    addDataToCharts(dailyHydration, [day], [dailyWater])
    addDataToCharts(weeklyHydration, week, weeklyWater)
  },
  generateSleepCard(sleep, user) {
    let day = "2019/06/15"
    let week = ["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"]
    let dailySleepQuality = user.getDailySleepQuality(sleep, day);
    let dailyHoursSlept = user.getDailyHoursSlept(sleep, day);
    let weeklySleepQuality = user.getSevenDaysOfSleepQuality(sleep, week);
    let weeklySleepQuantity = user.getSevenDaysOfSleepQuantity(sleep, week);
    let avgSleepQuality = user.getAvgAllTimeSleepQuality(sleep);
    let avgSleepQuantity = user.getTotalAvgDailyHoursSlept(sleep);
    addDataToCharts(dailySleepQual, [day], [dailySleepQuality]);
    addDataToCharts(dailySleepQuan, [day], [dailyHoursSlept]);
    addDataToCharts(weeklySleepQual, week, weeklySleepQuality);
    addDataToCharts(weeklySleepQuan, week, weeklySleepQuantity);
    avgSleepDisplay.innerHTML = `
      <p>Average Sleep Quality</p>
      <p>${avgSleepQuality}</p>
      <p>Average Hours Slept per Night</p>
      <p>${avgSleepQuantity}</p>
    `
  },
  infoButton() {
      toggleHidden(infoDropdownContent);
  },
  toggleDataDisplay() {
    dataCards.forEach(card => {
      toggleHidden(card)
    })
    toggleHidden(addNewDataBtn);
    toggleHidden(dataEntryForms);
    toggleHidden(backToMainBtn);
  }
}

const toggleHidden = (element) => {
    element.classList.toggle("hidden");
}

const addDataToCharts = (chart, label, data) => {
    chart.data.labels = label;
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
    });
    chart.update();
}


export {domUpdates};

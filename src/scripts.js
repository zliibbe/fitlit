// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

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

//data
let allUsers = new UserRepository(userData);



//functions
const getRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
}

const loadUserInfo = () => {
    // let randomIndex = getRandomNumber(userData)
    let luisa  = allUsers.users[0];

    // let randomUser = userData[randomIndex];
    generateUserInfoCard(luisa);
    
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

const toggleHidden = (element) => {
    element.classList.toggle("hidden");
}

// const hide = (element) => {
//     element.classList.add("hidden");
// }

const infoButton = () => {
    toggleHidden(infoDropdownContent);
}

//eventListeners
window.addEventListener('load', loadUserInfo)
moreInfoBtn.addEventListener('click', infoButton)

/*
• Create an info card on the dashboard with all of user’s info on the page
• Display their first name somewhere prominently on the page to welcome them
• For a specific user, display how their step goal compares to the average step 
goal amongst all users (this display should not be hard-coded)*/
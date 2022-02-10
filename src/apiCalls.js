// Your fetch requests will live here!
console.log('I will be a fetch request!')

// fetch users from herokuapp - array of 50 objects
fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => console.log(data.userData));

const users;

let fetchUserData = () => {
  fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => users = data.userData)
}

// fetch sleep data from herokuapp
fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then(response => response.json())
  .then(data => console.log(data.sleepData));


const sleepData;

let fetchSleepData = () => {
  fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then(response => response.json())
  .then(data => sleepData = data.sleepData)
}
// fetch activity data from herokuapp
fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
  .then(data => console.log(data.activityData));

const activityData;

let fetchActivityData = () => {
  fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
  .then(data => activityData = data.activityData)
}

// fetch hydration data from herokuapp
fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
.then(response => response.json())
.then(data => console.log(data.hydrationData));


const hydrationData;

let fetchhydrationData = () => {
  fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then(response => response.json())
  .then(data => activityData = data.hydrationData)
}

export default apiCalls; 

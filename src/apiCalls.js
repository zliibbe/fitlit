// Your fetch requests will live here!
console.log('I will be a fetch request!')

// fetch users from herokuapp - array of 50 objects
const users = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => console.log(data.userData));

// fetch sleep data from herokuapp
fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then(response => response.json())
  .then(data => console.log(data.sleepData));

// fetch activity data from herokuapp 
fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
  .then(data => console.log(data.activityData));

// fetch activity data from herokuapp 
fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
.then(response => response.json())
.then(data => console.log(data.hydrationData));


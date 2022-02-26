const userDataURL = "http://localhost:3001/api/v1/users";
const sleepDataURL = "http://localhost:3001/api/v1/sleep";
const hydrationDataURL = "http://localhost:3001/api/v1/hydration";
const activityDataURL = "http://localhost:3001/api/v1/activity"

const fetchData = (url) => { return fetch(url).then(response => {
    if (!response.ok) {
        throw new Error('Error with requesting information.');
      } else {
       return response.json();
      }
    }).catch(error => {
        console.warn(error)
    })
}

export {fetchData, userDataURL, sleepDataURL, hydrationDataURL, activityDataURL}
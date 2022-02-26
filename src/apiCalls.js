const userDataURL = "https://fitlit-api.herokuapp.com/api/v1/users";
const sleepDataURL = "https://fitlit-api.herokuapp.com/api/v1/sleep";
const hydrationDataURL = "https://fitlit-api.herokuapp.com/api/v1/hydration";

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

export {fetchData, userDataURL, sleepDataURL, hydrationDataURL}
const userDataURL = "https://fitlit-api.herokuapp.com/api/v1/users";
const sleepDataURL = "https://fitlit-api.herokuapp.com/api/v1/sleep";
const hydrationDataURL = "https://fitlit-api.herokuapp.com/api/v1/hydration";

const fetchData = (url) => fetch(url).then(response => response.json())

export {fetchData, userDataURL, sleepDataURL, hydrationDataURL};
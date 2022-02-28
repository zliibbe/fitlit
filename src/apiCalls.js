let errorMsg = document.querySelector('.error-display');

const fetchData = (dataType) => { return fetch(`http://localhost:3001/api/v1/${dataType}`).then(response => {
    if (!response.ok) {
        throw new Error('Error with requesting information.');
      } else {
       return response.json();
      }
    }).catch(error => {
        error = 'TypeError: Failed to fetch' ? errorMsg.innerText = 'Server is not currently running' : 
        errorMsg.innerText = 'Error encountered. See console.'
        console.warn(error)
    })
}

const postData = (dataType, body) => {
    fetch(`http://localhost:3001/api/v1/${dataType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error('422 Error: Server is not currently running')
        } else {
            return response.json()
        }
    })
    .catch(error => {
        errorMsg.innerText = 'Error encountered. See console.'
        console.warn(error)
    })
}

export {fetchData, postData}
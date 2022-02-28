# FitLit

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Abstract
This website allows for users to track and display data related to sleep and hydration. Currently this site draws user information from existing APIs and displays the information on the page. The API is run from a local server.


## Setup
Page
1. Fork this repo - on the top right corner of this page, click the **Fork** button.
1. Run `git clone` and paste the address for this repo after `git clone` in the command line.
1. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
1. Run `npm start` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)

Local server
1. Clone [this repo](https://github.com/turingschool-examples/fitlit-api.git) down, and `cd` into it. Then run:
1. `npm` install
1. Run `npm start` in your terminal to start the local server in your terminal.
1. To stop the local server from running in your terminal use `command + c`

## Technologies Used
- Javascript
- HTML
- CSS
- Webpack
- Test Driven Development
- Mocha
- Chai
- chart.js
- API

## Site Walkthrough
- On page load the user will see the nav bar has generated with their user info with a button to click to show more details

![Nav bar](https://user-images.githubusercontent.com/92277979/156075335-22ab3489-c4d5-439d-80dd-fec782a4e748.png)
![Nav bar more info detail](https://user-images.githubusercontent.com/92277979/156075378-066de3e8-4723-4ad3-a58b-36aeec591781.png)

- The page renders the users hydration and sleep data into easy to read charts based on the most recent data captured each display card is a set size and can be independently scrolled

![Sleep and Hydration Charts](https://user-images.githubusercontent.com/92277979/156075769-f6314db9-6473-4d17-9a69-902bd63f2bbc.png)

- There is a separate form page the user can reach by clicking the `Enter New Data` button where they can then input data for both hydration and sleep

![New Data Forms](https://user-images.githubusercontent.com/92277979/156076031-25c48f46-9e0c-4711-a0e8-ec5f52eea4db.png)


## Testing

In order to run testing if you ran `npm install`, then the tools you need to run the tests are already installed (`mocha` and `chai`). Run test files by typing `npm test [file path]`

## Wins
- Writing tests to guide our implementation code
- Class structure, utilizing prototype array iterator methods
- Success in implementing POST network requests
- Using semantic HTML

## Challenges
- Fetching data from API asynchronously
- Understanding asynchronous web function
- Having chart.js update dynamically when the user POSTs new data


## Contributers
- [Andrew Musselman](https://github.com/Andrew-Musselman)
- [Zach Liibbe](https://github.com/zliibbe)
- [Brenda Sotelo](https://github.com/BrendaSotel0)

### Project Manager
 - Heather Faerber from [Turing School of Software & Design](https://frontend.turing.edu/
 )

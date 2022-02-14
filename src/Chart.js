

const dailyHydrationChart = document.getElementById('daily-hydration-chart');
const dailyHydration = new Chart(dailyHydrationChart, {
    type: 'bar',
    data: {
        labels: ['Today'],
        datasets: [{
            label: 'Daily Water',
            data: [75],
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                'black'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const weeklyHydrationChart = document.getElementById('weekly-hydration-chart');
const weeklyHydration = new Chart(weeklyHydrationChart, {
    type: 'bar',
    data: {
        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets: [{
            label: 'Weekly Water',
            data: [75, 91, 96, 70, 76, 71, 27],
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                'black'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

export {dailyHydration, weeklyHydration}

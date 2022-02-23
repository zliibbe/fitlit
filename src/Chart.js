

const dailyHydrationChart = document.getElementById('daily-hydration-chart');
const dailyHydration = new Chart(dailyHydrationChart, {
    type: 'bar',
    data: {
        labels: ['Today'],
        datasets: [{
            label: 'Ounces Per Day',
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
            label: 'Ounces Per Day',
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

const dailySleepQualityChart = document.getElementById('daily-sleep-quality-chart');
const dailySleepQual = new Chart(dailySleepQualityChart, {
    type: 'bar',
    data: {
        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets: [{
            label: 'Quality Per Day',
            data: [],
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

const dailySleepQuantityChart = document.getElementById('daily-sleep-quantity-chart');
const dailySleepQuan = new Chart(dailySleepQuantityChart, {
    type: 'bar',
    data: {
        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets: [{
            label: 'Hours Per Day',
            data: [],
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

const weeklySleepQualityChart = document.getElementById('weekly-sleep-quality-chart');
const weeklySleepQual = new Chart(weeklySleepQualityChart, {
    type: 'bar',
    data: {
        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets: [{
            label: 'Quality Per Day',
            data: [],
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

const weeklySleepQuantityChart = document.getElementById('weekly-sleep-quantity-chart');
const weeklySleepQuan = new Chart(weeklySleepQuantityChart, {
    type: 'bar',
    data: {
        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets: [{
            label: 'Hours Per Day',
            data: [],
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


export {dailyHydration, weeklyHydration, dailySleepQual, dailySleepQuan, weeklySleepQual, weeklySleepQuan}

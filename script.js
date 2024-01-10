document.addEventListener('DOMContentLoaded', function() {
    refresh();
});

function last30DaysData() {
    const data = [];

    for (let i = 0; i < 30; i++) {
        const uptime = Math.floor(Math.random() * 21) + 80;
        const uptimeAverage = Math.floor(Math.random() * 21) + 70;

        data.push({
            uptime: uptime,
            uptimeAverage: uptimeAverage,
            lastDowntime: new Date().toISOString(),
        });
    }

    return data;
}

function refresh() {
    const randomData = last30DaysData();
    renderUptimeScore(randomData);
    renderUptimeDetails(randomData[randomData.length - 1]);
}

function renderUptimeScore(data) {
    const uptimeScoreDiv = document.querySelector('.uptime-score');
    uptimeScoreDiv.innerHTML = '';

    const recentData = data.slice(-12);

    recentData.forEach(day => {
        const bar = document.createElement('div');
        bar.classList.add('bar');

        if (day.uptime >= 90) {
            bar.style.backgroundColor = 'green';
        } else if (day.uptime >= 70) {
            bar.style.backgroundColor = 'yellow';
        } else {
            bar.style.backgroundColor = 'red';
        }

        uptimeScoreDiv.appendChild(bar);
    });
}

function renderUptimeDetails(lastDayData) {
    const uptimeDetailsDiv = document.querySelector('.uptime-details');
    uptimeDetailsDiv.innerHTML = '';

    const now = new Date();
    const lastDowntime = new Date(lastDayData.lastDowntime);

    const differenceMs = now - lastDowntime;

    const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));

    const detailsHTML = `
        <p>Uptime: ${lastDayData.uptime}%</p>
        <p>Last Downtime: ${days} days, ${hours} hours, ${minutes} minutes ago</p>
        <p>Average Uptime: ${lastDayData.uptimeAverage}%</p>
    `;
    uptimeDetailsDiv.innerHTML = detailsHTML;
}

function showAlert() {
    let alertElement = document.querySelector('.alert');

    if (!alertElement) {
        alertElement = document.createElement('div');
        alertElement.classList.add('alert');
        document.body.appendChild(alertElement);
    }

    alertElement.innerHTML = '<i class="fas fa-exclamation-circle"></i> Alert! This is a default visible toast!';

    alertElement.style.display = 'block';

    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 2000);
}

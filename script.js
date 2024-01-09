function refresh() {

}

function showAlert() {
    let alertElement = document.querySelector('.alert');

    if (!alertElement) {
        alertElement = document.createElement('div');
        alertElement.classList.add('alert');
        document.body.appendChild(alertElement);
    }

    alertElement.textContent = 'Alert! This is a default visible toast!';

    alertElement.style.display = 'block';

    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 2000);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
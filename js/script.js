let inputUa = document.getElementById('ua'),
    inputUsd = document.getElementById('usd'),
    inputEur = document.getElementById('eur');

inputUa.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputUa.value / data.usd).toFixed(2);
            inputEur.value = (inputUa.value / data.eur).toFixed(2);
            
        } else {
            inputUsd.value = "Enter a numerical value";
            inputEur.value = "Что-то пошло не так";
        }
    });
});
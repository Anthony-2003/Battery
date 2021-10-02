let percentage = document.querySelector('.box__batteryPercentage');
let percent = document.querySelector('.box__batteryPercent');

navigator.getBattery().then(function (battery) {
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
})

const body = document.querySelector('.body');
const btnDark = document.querySelector('.btn-light');

btnDark.onclik = () => {
    body.classList.toggle('dark');
}

  

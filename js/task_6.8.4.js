const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const circle = document.getElementsByTagName('div');

for (let i=0; i < circle.length; i++) {
    circle[i].addEventListener('click', makeGreen);
}

/* trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeGreen); */

function makeGreen() {
    trafficLightEl3.style.background = ('green');
    trafficLightEl1.style.background = ('#636b6f');
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeYellow);
}

function makeRed() {
    trafficLightEl1.style.background = ('red');
    trafficLightEl2.style.background = ('#636b6f');
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeGreen);
}

function makeYellow() {
    trafficLightEl3.style.background = ('#636b6f');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeRed);
}


const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 1;

const blurring = () => {
    load++;

    if (load > 99)
        clearInterval(interval);

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}



// Javascript / jQuery - map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


let interval = setInterval(blurring, 30);

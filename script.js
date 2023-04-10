const loadText = document.querySelector(".loading-text");
const reveal = document.querySelector(".reveal");
const babyName = document.querySelector(".name");

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
        babyName.style.color = "blue";
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    reveal.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
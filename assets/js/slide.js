
let selectedSlide = 0;

const slider = document.getElementById('slider');
const sliderNav = document.getElementById('slider-nav');

for (let i = 0; i < sliderNav.children.length; i++) {
    sliderNav.children[i].onclick = (event) => {
        select(i)
    }
}

const updateSlider = () => {
    for (let i = 0; i < slider.children.length; i++) {
        if (i == selectedSlide) {
            slider.children[i].classList.add("active")
        } else {
            slider.children[i].classList.remove("active")
        }
    }
    for (let i = 0; i < sliderNav.children.length; i++) {
        if (i == selectedSlide) {
            sliderNav.children[i].classList.add("active")
        } else {
            sliderNav.children[i].classList.remove("active")
        }
    }
}

const resetDirection = () => {
    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].classList.remove("right")
        slider.children[i].classList.remove("left")
    }
}

const nextProject = () => {
    let newSlide = selectedSlide + 1;
    if (newSlide >= slider.children.length) {
        newSlide = 0;
    }
    select(newSlide, "right");
}

const prevProject = () => {
    let newSlide = selectedSlide - 1;
    if (newSlide < 0) {
        newSlide = slider.children.length - 1;
    }
    select(newSlide, "left");
}

const select = (slideNumber, direction) => {
    if (slideNumber === selectedSlide) return;
    resetDirection()
    if ( direction == "left" || (!direction && selectedSlide > slideNumber) ) {
        // left
        slider.children[slideNumber].classList.add("left")
        slider.children[selectedSlide].classList.add("left")
    } else if ( direction == "right" || (!direction && selectedSlide < slideNumber)) {
        // right
        slider.children[slideNumber].classList.add("right")
        slider.children[selectedSlide].classList.add("right")
    }
    selectedSlide = slideNumber;
    updateSlider();

    const url = new URL(window.location);
    url.hash = slideNumber
    window.history.replaceState({}, '', url);
}


const number = new URL(window.location).hash.substr(1);

if (number !== "" && !isNaN(number)) {
    if (number >= 0 && number < slider.children.length) {
        selectedSlide = parseInt(number)
    }
}
updateSlider()



const images = [
    './laptop/black.jpg', './laptop/red.jpg', './laptop/gray.jpg'
];

const heading = [
    'New York, USA ', 'Tokyo, Japan', 'Ukraine, Kiev'
];

const description = [
    'the best city in the world', 'the best city in the world', 'the best city in the world'
];

let id = 0;

function slide(id) {
    slider.style.backgroundImage = `url(${images[id]})`;
    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 1000);

    heading.innerText = heading[id];

    description.innerText = description[id];
}

   arrLeft.addEventListener('click', () => {
    id--;

    if (id < 0) {
        id = images.length - 1;
    }

    slide(id);
});

    arrRight.addEventListener('click', () => {
        id++;

        if (id > images.length - 1) {
            id = 0;
        }

        slide(id);
    });
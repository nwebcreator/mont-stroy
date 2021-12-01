let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;

const container = document.querySelector('.slider-container');
const track = document.querySelector('.partners-list');
const item = document.querySelector('partners-item');
const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');
const items = document.querySelectorAll('.partners-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

buttonNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
});

buttonPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
});

const setPosition = () => {
    track.style.transform = `translate(${position}px)`;
};

const checkButtons = () => {
    buttonPrev.disabled = position === 0;
    buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkButtons();

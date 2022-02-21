const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let currentIndex = 0;

const slideWrapper = document.querySelector('.slide-wrapper');
const imgSlide = document.querySelector('.img-slide');
const slideText = document.querySelector('.slide-text');

for (let i = 0; i < items.length; i++) {

    const element = items[i];

    const item = `
        <div class="item">
            <img src="${items[i]}">
        </div> `;

    slideWrapper.innerHTML += item;

    const itemImage = `
        <div class="item-slide">
            <img src="${items[i]}">
        </div> `;

    imgSlide.innerHTML += itemImage;

    const titleSlide = ` 
            <h2 class="title-slider">${title[i]}</h2> `;

    slideText.innerHTML += titleSlide;

    const desSlide = `
        <p class="description-slide">${text[i]}`;

    slideText.innerHTML += desSlide;

}

const image = [...document.getElementsByClassName('item')];
image[currentIndex].classList.add('active');

const imageSlider = [...document.getElementsByClassName('item-slide')];
imageSlider[currentIndex].classList.add('active');

const titleSlider = [...document.getElementsByClassName('title-slider')];
titleSlider[currentIndex].classList.add('active');

const descripionSlider = [...document.getElementsByClassName('description-slide')];
descripionSlider[currentIndex].classList.add('active');

const buttonDown = document.querySelector('.fas.fa-chevron-down');

buttonDown.addEventListener('click', function() {
    
    if ( currentIndex < image.length - 1 ) {

        image[currentIndex].classList.remove('active');
        imageSlider[currentIndex].classList.remove('active');
        titleSlider[currentIndex].classList.remove('active');
        descripionSlider[currentIndex].classList.remove('active');

        currentIndex++;
    
        image[currentIndex].classList.add('active');
        imageSlider[currentIndex].classList.add('active');
        titleSlider[currentIndex].classList.add('active');
        descripionSlider[currentIndex].classList.add('active');

    } else {

        image[currentIndex].classList.remove('active');
        imageSlider[currentIndex].classList.remove('active');
        titleSlider[currentIndex].classList.remove('active');
        descripionSlider[currentIndex].classList.remove('active');

        currentIndex = 0;
    
        image[currentIndex].classList.add('active');
        imageSlider[currentIndex].classList.add('active');
        titleSlider[currentIndex].classList.add('active');
        descripionSlider[currentIndex].classList.add('active');

    }

})

const buttonUp = document.querySelector('.fas.fa-chevron-up');

buttonUp.addEventListener('click', function() {
    
    if ( currentIndex > 0 ) {

        image[currentIndex].classList.remove('active');
        imageSlider[currentIndex].classList.remove('active');
        titleSlider[currentIndex].classList.remove('active');
        descripionSlider[currentIndex].classList.remove('active');
    
        currentIndex--;
    
        image[currentIndex].classList.add('active');
        imageSlider[currentIndex].classList.add('active');
        titleSlider[currentIndex].classList.add('active');
        descripionSlider[currentIndex].classList.add('active');

    } else {

        image[currentIndex].classList.remove('active');
        imageSlider[currentIndex].classList.remove('active');
        titleSlider[currentIndex].classList.remove('active');
        descripionSlider[currentIndex].classList.remove('active');
    
        currentIndex = items.length - 1;
    
        image[currentIndex].classList.add('active');
        imageSlider[currentIndex].classList.add('active');
        titleSlider[currentIndex].classList.add('active');
        descripionSlider[currentIndex].classList.add('active');

    }

})
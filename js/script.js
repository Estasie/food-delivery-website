
 import tabs from './Modules/tabs';
 import modal from './Modules/modalFrames';
 import timer from './Modules/timer';
 import calculator from './Modules/calculator';
 import cards from './Modules/cards';
 import forms from './Modules/forms';
 import sliders from './Modules/sliders';
 import {openModal} from './Modules/modalFrames';

window.addEventListener('DOMContentLoaded', function() {


    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-08-30');
    calculator();
    cards();
    forms('form', modalTimerId);
    sliders({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });


});








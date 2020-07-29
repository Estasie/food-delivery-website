/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Food/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Food/js/Modules/calculator.js":
/*!***************************************!*\
  !*** ./Food/js/Modules/calculator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator() {
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

   function initLocalSettings(selector, activeClass) {
       const elements = document.querySelectorAll(selector);

       elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if(elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
        }
        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
            elem.classList.add(activeClass);
        }
       });
   }
   initLocalSettings('#gender div', 'calculating__choose-item_active');
   initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal(){
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '0';
            return;
        } 

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


    function getDynamicInformation(selector){
        const input = document.querySelector(selector);



        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)){
                input.style.background = "#EB846A";
                input.style.color = "#fff";
            } else {
                input.style.background = "#fff";
                input.style.color = "#000";
            }
            switch(input.getAttribute('id')){
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });

        
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

module.exports = calculator;

/***/ }),

/***/ "./Food/js/Modules/cards.js":
/*!**********************************!*\
  !*** ./Food/js/Modules/cards.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cards () {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    const postData = async (url, data) => { // ОЧЕНЬ ВАЖНАЯ ЧАСТЬ
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    const getResource = async (url) => { // ОЧЕНЬ ВАЖНАЯ ЧАСТЬ
        const res = await fetch(url);

        if (!res.ok){
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`); // throw -"выкидывает" ошибку
        }

        return await res.json();
    };
    
    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => { //Деструктуризация объекта - вытаскивание свойств объекта, как аргументов для функции
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
}

module.exports = cards;

/***/ }),

/***/ "./Food/js/Modules/forms.js":
/*!**********************************!*\
  !*** ./Food/js/Modules/forms.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
    const forms= document.querySelectorAll('form');

    const message = {
        loading: 'img/form/original.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

forms.forEach(item => {
    bindPostData(item);
});



function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        // form.appendChild(statusMessage);
        form.insertAdjacentElement('afterend', statusMessage);
      
        const formData= new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries())); // В ДАННОЙ ЧАСТИ КОДА МЫ ПРЕОБРАЗУЕМ ВХОДЯЩИЕ ДАННЫЕ В JSON ФОРМАТ, а затем возвращаем преобразованный объект к классическому объекту


        // formData.forEach(function(value,key) {
        //     object[key] =value;
        // });


        postData('http://localhost:3000/requests', json)
        .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        });
        request.send(json);
        // request.addEventListener('load', () => {
        //     if (request.status === 200) {
        //         console.log(request.response);
        //         showThanksModal(message.success);
        //         form.reset();
        //         statusMessage.remove();
        //     } else {
        //         showThanksModal(message.failure);
        //     }
        // });
    });
}



function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
   
    prevModalDialog.classList.add('hide');

    openModal();


    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialoge');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 4000);

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
}

}

module.exports = forms;

/***/ }),

/***/ "./Food/js/Modules/modalFrames.js":
/*!****************************************!*\
  !*** ./Food/js/Modules/modalFrames.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalFrames() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);
    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

}

module.exports = modalFrames;

/***/ }),

/***/ "./Food/js/Modules/sliders.js":
/*!************************************!*\
  !*** ./Food/js/Modules/sliders.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sliders() {
        const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prevArrow = document.querySelector('.offer__slider-prev'),
        nextArrow = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper= document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
    } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
    }


    slidesField.style.width = 100 * slides.length +'%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach((slide) => {
    slide.style.width = width;
    });

    slider.style.position = 'relative';


    const indicators = document.createElement('ol'),
    dots = [];
    indicators.classList.add('carousel-indicators');

    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText= `
            box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
    }

    nextArrow.addEventListener('click', () => {
    if (offset == replaceWords(width) * (slides.length - 1)){
        offset = 0;
    } else {
        offset += replaceWords(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex =1;
    } else {
        slideIndex++;
    }

    if(slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }

    dots.forEach((dot) => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity =1;
    });
    prevArrow.addEventListener('click', () => {
    if (offset == 0 ){
        offset = replaceWords(width) * (slides.length - 1)
    } else {
        offset -= replaceWords(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if(slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
    dots.forEach((dot) => {
        dot.style.opacity = '.5';
    });
    dots[slideIndex - 1].style.opacity =1;
    });

    dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex= slideTo;

        offset = replaceWords(width) * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        
        if(slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) =>  dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity =1;
        
    });
    })

    function replaceWords(arg) {
    return +arg.replace(/\D/g, '');
    }

}

module.exports = sliders;




                                            //         showSlide(slideIndex);
                                                    
                                            // if (slides.length < 10) {
                                            //     total.textContent = `0${slides.length}`;
                                            // } else {
                                            //     total.textContent = slides.length;
                                            // }

                                            // function showSlide(n) {
                                            //     if(n > slides.length){
                                            //         slideIndex = 1;
                                            //     }

                                            //     if (n < 1) {
                                            //         slideIndex = slides.length;
                                            //     }
                                                
                                            //     slides.forEach (item => item.style.display = 'none');

                                            //     slides[slideIndex -1].style.display = 'block';

                                            //     if (slides.length < 10) {
                                            //         current.textContent = `0${slideIndex}`;
                                            //     } else {
                                            //         current.textContent = slideIndex;
                                            //     }

                                            // }

                                            // function plusSlides(n) {
                                            //     showSlide(slideIndex +=n);
                                            // }


                                            // prevArrow.addEventListener('click', () => {
                                            //     plusSlides(-1);
                                            // });

                                            // nextArrow.addEventListener('click', () => {
                                            //     plusSlides(1);
                                            // });
    

/***/ }),

/***/ "./Food/js/Modules/tabs.js":
/*!*********************************!*\
  !*** ./Food/js/Modules/tabs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

function hideTabContent() {
    
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});
}


module.exports = tabs;

/***/ }),

/***/ "./Food/js/Modules/timer.js":
/*!**********************************!*\
  !*** ./Food/js/Modules/timer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    const deadline = '2020-05-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

}

module.exports = timer;

/***/ }),

/***/ "./Food/js/script.js":
/*!***************************!*\
  !*** ./Food/js/script.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    const tabs = __webpack_require__(/*! ./Modules/tabs */ "./Food/js/Modules/tabs.js"),
        modal = __webpack_require__(/*! ./Modules/modalFrames */ "./Food/js/Modules/modalFrames.js"),
        timer = __webpack_require__(/*! ./Modules/timer */ "./Food/js/Modules/timer.js"),
        calculator = __webpack_require__(/*! ./Modules/calculator */ "./Food/js/Modules/calculator.js"),
        cards = __webpack_require__(/*! ./Modules/cards */ "./Food/js/Modules/cards.js"),
        forms = __webpack_require__(/*! ./Modules/forms */ "./Food/js/Modules/forms.js"),
        sliders = __webpack_require__(/*! ./Modules/sliders */ "./Food/js/Modules/sliders.js");


    tabs();
    modal();
    timer();
    calculator();
    cards();
    forms();
    sliders();


});









/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
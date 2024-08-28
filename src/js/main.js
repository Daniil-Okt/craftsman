/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
import AOS from 'aos'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
// BaseHelpers.headerFixed();


/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
window.addEventListener('load', () => {
	AOS.init();
})

/** ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'

useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
import { maskTel } from './modules/index.js'
maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
//toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
const swiper = new Swiper('.work__slider', {
  speed: 1200,
  spaceBetween: 16,
  slidesPerView: 1,
  modules: [Autoplay],
//   loop: true,
  initialSlide: 0,
  autoplay: {
    delay: 2700,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
//   navigation: {
    // prevEl: ".reviews__button-slider-prev"
    // nextEl: ".reviews__button-slider-next"
//   },

});

const quizSlider = new Swiper('.quiz__slider', {
	speed: 0,
	spaceBetween: 16,
	slidesPerView: 1,
	autoHeight: true,
	modules: [Navigation, Pagination],
	navigation: {
 	    prevEl: ".quiz__button-prev",
	    // nextEl: ".quiz__button-next"
	},
	pagination: {
		el: '.quiz__pagination',
		type: 'progressbar',
	},
	breakpoints: {
		841: {
		  autoHeight: false,
		},
	}
  });

  const quizLabelNext = document.querySelectorAll('.quiz-label-next')
  if (quizLabelNext.length > 0) {
	quizLabelNext.forEach(button => {
		button.addEventListener('mouseup', () => {
			setTimeout(() => {
				quizSlider.slideNext()
			}, 400);
		})
	  });
  }


/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
import { validForm } from './modules/validFrom.js'
const popupTranks = document.querySelector('.popup-tranks')

const forms = document.querySelectorAll('form')
if (forms.length > 0) {
	forms.forEach(form => {
		validForm(form, popupTranks)
	});
}


// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'


/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClass } from './modules/index.js'

const lookPaginationSwitch = document.querySelectorAll('.look-pagination__switch');
toggleActiveClass(lookPaginationSwitch)
const questItem = document.querySelectorAll('.quest-item');
toggleActiveClass(questItem)




//mansory
// import { mansory } from './libs/mansory.js';
// mansory()



//ползунок цены
// import { uiSlider } from './libs/uiSlider.js';
import "./libs/uiSlider.js";

document.addEventListener("DOMContentLoaded", function() {
	const slidersRange = document.querySelectorAll(".slider-range");
	const minInputs = document.querySelectorAll(".range__min-input");
	const maxInputs = document.querySelectorAll(".range__max-input");
	const buttonResetForm =  document.querySelectorAll(".button-reset-range");
	for (let index = 0; index < slidersRange.length; index++) {
		// Создаем диапазонный слайдер с библиотекой noUiSlider
	noUiSlider.create(slidersRange[index], {
	  range: {
		  'min': 20000,
		  'max': 200000
	  },
	  start: [20000, 200000], // Начальные значения бегунков
	  connect: true, // Связываем бегунки
	  step: 500, // Шаг слайдера (только целые числа)
	});
	function numberWithSpaces(number) {
	  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}
	// Функция для обновления значений инпутов
	function updateInputs(values) {
		minInputs[index].value = numberWithSpaces(Math.round(values[0]));
		maxInputs[index].value = numberWithSpaces(Math.round(values[1]));
	}
  
	// Функция для обновления слайдера при вводе значений в инпуты
	function updateSliderFromInputs() {
		// const minValue = parseFloat(minInputs[index].value);
		// const maxValue = parseFloat(maxInputs[index].value);
		const minValue = parseFloat(minInputs[index].value.replace(/\s+/g, ''));
		const maxValue = parseFloat(maxInputs[index].value.replace(/\s+/g, ''));

		slidersRange[index].noUiSlider.set([minValue, maxValue]);
	}
  
	// Обновляем инпуты при изменении положения бегунков
	slidersRange[index].noUiSlider.on('update', function(values) {
		updateInputs(values);
	});
  
	// Связываем изменение инпутов с обновлением слайдера
	minInputs[index].addEventListener('change', updateSliderFromInputs);
	maxInputs[index].addEventListener('change', updateSliderFromInputs);
	buttonResetForm[index].addEventListener('click', () => {
		slidersRange[index].noUiSlider.set([20000, 200000]);
	})
	// Установим начальные значения для инпутов
	updateInputs(slidersRange[index].noUiSlider.get());
	  }
  });

const buttonsResetForm = document.querySelectorAll('.button-reset-form');

if (buttonsResetForm.length > 0) {
	buttonsResetForm.forEach(button => {
		button.addEventListener('click', () => {
			const form = button.closest('form')
			form.reset()
		})
	});
}

//кнопка формы
document.addEventListener('DOMContentLoaded', function () {
    const buttonRow = document.querySelector('.quiz__button-row');
	const quizSlideEnd = document.querySelector('.quiz-slide-end');
    buttonRow.addEventListener('click', function (event) {
        const nextButton = buttonRow.querySelector('.quiz__button-next');
        const prevButton = buttonRow.querySelector('.quiz__button-prev');

        if (event.target === nextButton) {
			quizSlider.slideNext()

            if (quizSlideEnd.classList.contains('swiper-slide-active') && !nextButton.classList.contains('send')) {
                // Создаем новый элемент button с классами и текстом
                const newButton = document.createElement('button');
                newButton.className = nextButton.className.replace('swiper-button-disabled', '') + ' send'; // Копируем классы, убираем swiper-button-disabled и добавляем класс send
                newButton.textContent = 'Отправить'; // Меняем текст

                // Заменяем элемент div на button
                nextButton.parentNode.replaceChild(newButton, nextButton);
            }
        }

        if (event.target === prevButton) {
            const currentNextButton = buttonRow.querySelector('.quiz__button-next');
            if (currentNextButton.classList.contains('send')) {
                // Восстанавливаем оригинальный div с текстом "Далее"
                const originalDiv = document.createElement('div');
                originalDiv.className = currentNextButton.className.replace(' send', '').replace('swiper-button-disabled', ''); // Убираем классы send и swiper-button-disabled
                originalDiv.textContent = 'Далее'; // Возвращаем текст

                // Заменяем элемент button обратно на div
                currentNextButton.parentNode.replaceChild(originalDiv, currentNextButton);
            }
        }
    });
});


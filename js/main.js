// TABS

$('.card').on('click', function() {
	let currTub = ($(this).parent().index());

	$('.card').removeClass('card-active'); //Обращаемся ко всем классам card и удаляем все классы card-active
	$(this).addClass('card-active'); //К элементу на который кликнули добавляем класс card-active

	$('.tab-content').removeClass('active'); // Обращаемся ко всем классам tab-content и удаляем класс activ
	$('.tab-content').eq(currTub).addClass('active'); // Обращаемся ко всем классам tab-content и по индексу добавляем класс activ
})

//eq - метод возвращает обект по заданому индексу

// HAMBURGER - меню при малом разрешении экрана

$('.hamburger').on('click', function () {
	$('.head__menu').toggle(); // При клике на кнопку Гамбургер меню открывается и закрывается для маленьких экранов
}) 


$('.menu-close').on('click', function () {
	$('.head__menu').hide(); // При клике на кнопку закрытия меню, закрываем его
})

//PARALLAX - Библиотека Js для анимации картинок (js/parallax.js)

// В HTML Обязательно для элементов div прописываем data-depth="0.6" class="layer" для первой 
// data-depth="0.3" class="layer" для второго div который будет задействован

let scene = document.getElementById('scene'); //Получаем переменную scene по id
let parallaxInstance = new Parallax(scene); 


//СЛАЙДЕРЫ (SWIPER.JS - библиотека swiper.js.com > Demo (виды слайдера))

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween : 60, //Растояние между слайдами
  slidesPerView: 4, // количество показаных слайдов 
  loop: true, // Автоматическое переключение
  stopOnLastSlide : false, //При последнем слайде цикл не прерывается 
  autoplay : {
  	delay: 2000 // количество секунд (2с.) при переходе слайда
  }
});

//MAP (преходим по ссылке в гугле "api google map js")
//Добавить ключ и подставить значение

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: { lat: 50.27, lng: 30.30 }, //Координаты карты
	zoom: 9 //Размер карты 
	});
}

// Валидация (js/jquery.validate.min.js)

$.validator.addMethod('regex', function(value, element, regexp) {
	let regExsp = new RegExp(regexp);
	return regExsp.test(value);
}, 'Please check your inpute');

$('form').validate({
	rules : {
		firstName : {
			required: true,
			regex :"[A-Za-z]{1,32}" //Набор правил использования букв англ. от a до z, и размера от 1 до 32.
		},
		phoneNumber : {
			digits : true,
			required : true,
			minlength : 10,
			maxlength : 11,
			regex : "[0-9]+"
		}
	},
	messages : {
		firstName: 'Введите имя правильно',
		phoneNumber: 'Введите номер правильно'
	}
})
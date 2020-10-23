// создаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//  создаем переменную в которую кладем меню
let menu = document.querySelector('.sidebar');

// отслеживаем клик по кнопке меню и запускаем функциию
menuToggle.addEventListener('click', function(event){
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню после клика по кнопке меню
    menu.classList.toggle('visible');
})
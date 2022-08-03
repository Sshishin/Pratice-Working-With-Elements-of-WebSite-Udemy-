/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Удалили элементы со страницы

const rem = document.querySelectorAll('.promo__adv img'),       //Так обращаемся к дочернему элементу
    gen = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    list = document.querySelector('.promo__interactive-list');

rem.forEach( (item) => {
item.remove();
});

gen.textContent = 'ДРАМА';

poster.style.backgroundImage = 'url("img/bg.jpg")' ;        //Разные кавычки это тут важно

list.innerHTML = '';        //Так как пустые ковычки то таким образом мы тоже можем удалять кусочек кода

movieDB.movies.sort();      //Сортируем по алфавиту

movieDB.movies.forEach((num,item) => {      //Начинаем перебирать именно массив потому что его значения будем использовать
    list.innerHTML += `<li class="promo__interactive-item">${item + 1}. ${num}
    <div class="delete"></div
    ></li>`;    //Обращаемся к месту куда нужно добавить необходимый код и ставим += чтобы код добавлялся новыми строками
});

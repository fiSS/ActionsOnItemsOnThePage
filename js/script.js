/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
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

//удаление рекламмы
const advertizing = document.querySelectorAll('.promo__adv img');
advertizing.forEach(function (item) {
    //item.style.display = 'none';
    item.remove();
});

//изменить жанр фильмов поменять коммедия на драмма
const genreOfMovies = document.querySelector('.promo__genre');
genreOfMovies.textContent = "драммы";

//Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
let posterOfFilms = document.querySelector('.promo__bg');
posterOfFilms.style.backgroundImage = "url(img/bg.jpg)";

//Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 

const movieList = document.querySelector('.promo__interactive-list'),
    allFilms = document.querySelectorAll('.promo__interactive-item');


movieList.textContent = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${item}
            <div class="delete"></div>
        </li>
    `;
});

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const advertizing = document.querySelectorAll('.promo__adv img'),
          genreOfMovies = document.querySelector('.promo__genre'),
          posterOfFilms = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          chekBox = document.querySelector('[type="checkbox"]');
    console.log(chekBox);

    //удаление рекламмы
    const deleteAdv = (arr) => {
        arr.forEach(function (item) {
            item.remove();
        });
    };

    //изменить жанр фильмов поменять коммедия на драмма
    //Изменить задний фон постера с фильмом на изображение "bg.jpg".
    const makeChanges = () => {
        genreOfMovies.textContent = "драммы";
        posterOfFilms.style.backgroundImage = "url(img/bg.jpg)";
    };
    
    //Отсортировать их по алфавиту 
    const sortarray = (arr) => {
        arr.sort();
    };
    
    //Список фильмов на странице сформировать на основании данных из этого JS файла.
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortarray(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}: ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        //При клике на мусорную корзину - элемент будет удаляться из списка
        document.querySelectorAll('.delete').forEach((btn ,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                //пример рекурсии
                createMovieList(films, parent);
            });
        });
    }


    // Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.
    // Для получения доступа к значению input - обращаемся к нему как input.value;
    // P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value; //что введено в инпут
        const favorite = chekBox.checked; //checked когда галочка отмечена

        if(newFilm) {

            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            //переиспользуем функции в качестве методов
            sortarray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        
       

        addForm.reset();

    });

        
    deleteAdv(advertizing);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});

#### JS
##### поучение элементов со странице с которыми буду работать
```javascript
const advertizing = document.querySelectorAll('.promo__adv img'),
          genreOfMovies = document.querySelector('.promo__genre'),
          posterOfFilms = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          chekBox = document.querySelector('[type="checkbox"]');
```
##### 1.удаление рекламных сообщений со страницы, в качестве аргумента при вызове использую псевдоколлекцию полученную и записанную в advertizing.
```javascript
advertizing = document.querySelectorAll('.promo__adv img');
const deleteAdv = (arr) => {
        arr.forEach(function (item) {
            item.remove();
        });
    };
    deleteAdv(advertizing);
```
##### изменил жанр фильмов поменял коммедия на драмма Изменил задний фон постера с фильмом на изображение "bg.jpg".
```javascript
const makeChanges = () => {
        genreOfMovies.textContent = "драммы";
        posterOfFilms.style.backgroundImage = "url(img/bg.jpg)";
    };
    makeChanges();
```
##### Список фильмов на странице сформирован на основании данных из данного JS файла.
```javascript
const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

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
```
##### при клике на мусорную корзину элемент удаляется со страницы, методом remove.
```javascript
document.querySelectorAll('.delete').forEach((btn ,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
            }
```
#### применил рекурсию для формирования списка заново после удаления из корзины.
```javascript
createMovieList(films, parent);
```
#####  Реализовал функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -  новый фильм добавляется в список. Страница не перезагружаться.
###### отменил стандатрное поведение браузера
```javascript
addForm.addEventListener('submit', (event) => {
        event.preventDefault();
}
```
###### при помощи метода value установил, что введено в инпут:
```javascript
addInput = addForm.querySelector('.adding__input');
let newFilm = addInput.value;
```
###### проверка проставлена ли галочка в чекбоксе.
```javascript
chekBox = document.querySelector('[type="checkbox"]');
const favorite = chekBox.checked;
```
###### обрезал длинну если колличество символов превышает 21.
```javascript
if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
```
###### запушил новый фильм.
```javascript
movieDB.movies.push(newFilm);
```
###### использую в качестве метода функцию createMovieList для добавления элемента.
```javascript
createMovieList(movieDB.movies, movieList);
```

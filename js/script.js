

document.addEventListener('DOMContentLoaded', () => {  //КОД СРАБОТАЕТ ТОЛЬКО ТОГДА КОГДА ДОМ СТРУКТУРА УЖЕ БУДЕТ ЗАГРУЖЕНА ЧТОБЫ ВСЕ ПРОГРУЗИТЬСЯ УСПЕЛО

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
    
    
    const rem = document.querySelectorAll('.promo__adv img'),     
        gen = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');
    

    //Обернули в функцию
    const deleteAdv = (arr) => {
        arr.forEach( (item) => {
            item.remove();
            });
    };
    
  

        

    //Обернули в функцию
    const makeChanges = () => {
        gen.textContent = 'ДРАМА';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")' ;  
    };

    


     //Обернули в функцию
    const sortArr = (arr) => {
        arr.sort(); 
    };

    
    

    //Обернули в функцию
    function createMovieList(films, parent) {
        parent.innerHTML = '';        
        sortArr(films);
        
        films.forEach((num,item) => {      
            parent.innerHTML += `<li class="promo__interactive-item">${item + 1}. ${num}
            <div class="delete"></div
            ></li>`;    
        });
        
        // Удаляем элементы при клике на корзину

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);  //КАК ТУТ РАБОТАЕТ РЕКУРСИЯ?
            });
        });
    }

    

    //Свежее решение 

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();         //Делаем чтобы страница не перезагружалась при вводе в инпут
   

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if(newFilm) {

        if(newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,22)}...`;
        }

        if(favorite) {
            console.log('Вы добавили любимый фильм')
        }
        
        movieDB.movies.push(newFilm);       //Добавляем переменную с новым фильмом в массив
    sortArr(movieDB.movies);        //Используем функцию сортировки повторно

    createMovieList(movieDB.movies, list);      //Здесь таким образом добавляем новый фильм?
    }

    



    event.target.reset();
    });

    deleteAdv(rem);
    makeChanges();
    
    createMovieList(movieDB.movies, list);
});


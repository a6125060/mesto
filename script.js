/* редактирование профиля

let popup = document.querySelector('.popup__name');
let popup.value = 'Жак-Ив Кусто';

let popup = document.querySelector('.popup__name');
let popup.value = 'Жак-Ив Кусто';

*/
document.querySelector('.popup').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.querySelector('.popup__window').addEventListener('submit', function() {
    document.querySelector('.profile-info__title').textContent = (document.querySelector('.popup__name').value);
});

document.querySelector('.popup__window').addEventListener('submit', function() {
    document.querySelector('.profile-info__subtitle').textContent = (document.querySelector('.popup__job').value);
});


/* открытие/закрытие popup */

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.popup__close');
let closeButton2 = document.querySelector('.popup__save');


function togglePopup() {
    popup.classList.toggle('popup__opened')
};

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);

closeButton2.addEventListener('click', togglePopup);


/* 

лайки 

document.querySelector('.card__like').addEventListener('click', function() {
    document.querySelector('.card__like').classList.toggle('card__black');
});






архив





document.querySelector('.card__like').addEventListener('click', function() {
    document.querySelector('.card__like').classList.toggle('black')
});

*/
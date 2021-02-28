/* редактирование профиля */

let popup = document.querySelector('.popup__name');
let popup.value = 'Жак-Ив Кусто';

document.querySelector('.popup').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.querySelector('.popup__window').addEventListener('submit', function() {
    alert(document.querySelector('.popup__name').value);
    document.querySelector('.profile-info__title').textContent = (document.querySelector('.popup__name').value);
});

/* открытие/закрытие popup */

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.popup__close');


function togglePopup() {
    popup.classList.toggle('popup__opened')
};

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);




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
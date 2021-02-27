document.querySelector('.card__like').addEventListener('click', function() {
    document.querySelector('.card__like').classList.toggle('card__like_active_true')
});





let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.popup__close');


function togglePopup() {
    popup.classList.toggle('popup__opened')
};

editButton.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);
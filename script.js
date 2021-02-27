document.querySelector('.card__like').addEventListener('click', function() {
    document.querySelector('.card__like').classList.toggle('card__black-like');
});





let popup = document.querySelector('.popup')
let editButton = document.querySelector('.edit-button')
let closeButton = document.querySelector('.popup__close')


function togglePopup() {
    popup.classList.toggle('popup__opened')
}

editButton.addEventListener('click', togglePopup)

closeButton.addEventListener('click', togglePopup)







/* 
let like = document.querySelector('.card__like')

function toggleLike() {
    like.classList.toggle('card__black-like')
}

like.addEventListener('click', toggleLike)




document.querySelector('.edit-button')



alert('Привет, мир!');
console.log('Hello, world!')



function showEditPopup() {
    popup.classList.add('popup__opened')
}

function closeEditPopup() {
    popup.classList.remove('popup__opened')

}

editButton.addEventListener('click', showEditPopup)

closeButton.addEventListener('click', closeEditPopup)
d
*/
/* открытие/закрытие popup */
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.popup__close');
let submitButton = document.querySelector('.popup__save');

/* редактирование профиля popup */
let formSubmit = document.querySelector('.popup__window');
let firstName = document.querySelector('.profile-info__title');
let job = document.querySelector('.profile-info__subtitle');
let inputFirstName = document.querySelector('.popup__input_field_name');
let inputJob = document.querySelector('.popup__input_field_job');




/* получаем в инпуты данные со странички*/
function putName() {
    inputFirstName.value = firstName.textContent;
    inputJob.value = job.textContent;
};


/* открытие/закрытие popup */
function togglePopup() {
    popup.classList.toggle('popup_active_true')
};



function funInputProfile(event) {
    event.preventDefault();
    firstName.textContent = inputFirstName.value;
    job.textContent = inputJob.value;
}

/* открытие/закрытие popup */
editButton.addEventListener('click', putName);
editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
submitButton.addEventListener('click', togglePopup);


/* редактирование профиля popup */
formSubmit.addEventListener('submit', funInputProfile);
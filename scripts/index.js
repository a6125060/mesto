/* открытие/закрытие popup */
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.popup__close');
let submitButton = document.querySelector('.popup__save');

/* редактирование профиля popup */
let formSubmit = document.querySelector('.popup__window');
let firstName = document.querySelector('.profile-info__title');
let job = document.querySelector('.profile-info__subtitle');
let inputFirstName = document.querySelector('.popup__name');
let inputJob = document.querySelector('.popup__job');

/* получаем в инпуты формы предустановки*/
inputFirstName.value = firstName.textContent;
inputJob.value = job.textContent;


/* открытие/закрытие popup */
function togglePopup() {
    popup.classList.toggle('popup_active_true')
};

function preventDefaultEvent(event) {
    event.preventDefault();
}

function funInputFirstName() {
    firstName.textContent = inputFirstName.value;
}

function funInputJob() {
    job.textContent = inputJob.value;
}

/* открытие/закрытие popup */
editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
submitButton.addEventListener('click', togglePopup);


/* редактирование профиля popup */
formSubmit.addEventListener('submit', preventDefaultEvent);
formSubmit.addEventListener('submit', funInputFirstName);
formSubmit.addEventListener('submit', funInputJob);
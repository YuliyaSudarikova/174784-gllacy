var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".form-feedback");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var contact = popup.querySelector("[name=email]");
var storage = localStorage.getItem("name");
var shadow = document.querySelector('.shadow');

var uvedomlenie = document.querySelector('.uvedomlenie');

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("form-feedback-show");
    shadow.classList.add("form-feedback-show");

    if (storage) {
        login.value = storage;
        contact.focus();
    } else {
        login.focus();
    }

});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("form-feedback-show");
    shadow.classList.remove("form-feedback-show");
});

form.addEventListener("submit", function(event) {
    if (!login.value  || !contact.value) {
    event.preventDefault();
    alert('Заполните поля');
uvedomlenie.classList.add('form-feedback-show');
    } else {
        localStorage.setItem("name", login.value);
    }
});

shadow.addEventListener('click', function () {
    popup.classList.remove("form-feedback-show");
    shadow.classList.remove("form-feedback-show");
});
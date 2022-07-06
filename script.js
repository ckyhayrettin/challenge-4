const form = document.querySelector('.form')
const email = document.querySelector('#email')
const danger = document.querySelector('.danger')
const dangerText = document.querySelector('.danger-text')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailVal = email.value;

    if (emailVal === '') {
        email.classList.add('show-error')
        danger.className = 'show-danger'
        dangerText.className = 'show-text'
    } else if (!validateEmail(emailVal)) {
        email.classList.add('show-error')
        danger.className = 'show-danger'
        dangerText.className = 'show-text'
    } else {
        email.className = 'email'
        danger.className = 'danger'
        dangerText.className = 'danger-text'
    }
})

const mobileForm = document.querySelector('.mobile-form');
const mobileMail = document.querySelector('#mobil-mail');
const mobileDanger = document.querySelector('.mobile-danger');
const mobileDangerText = document.querySelector('.mobile-danger-text');

mobileForm.addEventListener('submit', function (e) {
    e.preventDefault();

    mobMail = mobileMail.value;

    if (mobileMail.value === '') {
        mobileForm.classList.add('show-error')
        mobileDanger.className = 'mobile-open'
    } else if (!validateEmail(mobMail)) {
        mobileForm.classList.add('show-error')
        //mobileDanger.className = 'mobile-open'
    } else {
        email.className = 'mobil-mail'
        mobileDanger.className = 'mobile-danger'
        mobileForm.classList.remove('show-error')
        //dangerText.className = 'danger-text'
    }
    console.log(mobileMail.value)
})

const validateEmail = function (email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
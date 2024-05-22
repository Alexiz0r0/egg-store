import {checkFormInputs} from "./formValidator.js";
import {getUsers, showToastAlert} from "./util.js";


const form = document.getElementById('formLogin');
const email = document.getElementById('emailLogin');
const pwd = document.getElementById('pwdLogin');
const registerBtn = document.getElementById('goToRegister');

const navigateToRegister = () => {
    window.location.href = "./register.html";
}

const submitForm = () => {
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const isOk = checkFormInputs(emailValue, pwdValue);
    if (isOk) {
        const isRegistered = checkUser(emailValue, pwdValue);
        if (isRegistered) {
            localStorage.setItem("token", "ABCDEF123");
            showToastAlert({
                position: "top-end",
                icon: "success",
                title: "Inicio de sesión exitoso.",
                timer: 5000
            })
            window.location.href = "./index.html";
        }
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});

const checkUser = (emailValue, pwdValue) => {
    const users = getUsers();
    const userExists = users.find((user) => user.email === emailValue && user.pwd === pwdValue);
    if (!userExists) {
        showToastAlert({
            position: "bottom",
            icon: "error",
            title: "El usuario no existe.",
            timer: 2000
        })
        return false;
    } else {
        return true;
    }
}

registerBtn.addEventListener('click', navigateToRegister);

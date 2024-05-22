import {checkFormInputs} from "./formValidator.js";
import {getUsers, showToastAlert} from "./util.js";

const loginBtn = document.getElementById('goToLogin');
const form = document.getElementById('form');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');

const navigateToLogin = () => {
    window.location.href = "./login.html";
}

const submitFormInputs = () => {
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const isOk = checkFormInputs(emailValue, pwdValue);
    if (isOk) {
        const isRegistered = registerUser(emailValue, pwdValue);
        if (isRegistered) {
            localStorage.setItem("token", "ABCDEF123");
            showToastAlert({
                position: "top-end",
                icon: "success",
                title: "Usuario registrado correctamente.",
                timer: 5000
            })
            window.location.href = "./index.html";
        }
    }
}

const registerUser = (emailValue, pwdValue) => {
    const users = getUsers();
    const userExists = users.find((user) => user.email === emailValue);
    if (userExists) {
        showToastAlert({
            position: "bottom",
            icon: "error",
            title: "El usuario ya existe.",
            timer: 2000
        })
        return false;
    } else {
        const user = {
            email: emailValue,
            pwd: pwdValue
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }
}

loginBtn.addEventListener('click', navigateToLogin);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitFormInputs();
});



import {isEmail, showToastAlert} from "./util.js";

export const checkFormInputs = (emailValue = '', pwdValue = '') => {

    if (emailValue === '' || pwdValue === '') {
        showToastAlert({
            position: "bottom",
            icon: "error",
            title: "Todos los campos son obligatorios.",
            timer: 2000
        })
        return false;
    }
    if (!isEmail(emailValue)) {
        showToastAlert({
            position: "bottom",
            icon: "error",
            title: "Email inválido.",
            timer: 2000
        })
        return false;
    }
    if (pwdValue.length < 6) {
        showToastAlert({
            position: "bottom",
            icon: "error",
            title: "La contraseña debe tener al menos 6 caracteres.",
            timer: 2000
        })
        return false;
    }
    return true;
}
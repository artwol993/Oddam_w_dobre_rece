export default function validateForm(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Podaj imie";
    }

    if (!values.email) {
        errors.email = "Podaj email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email jest nieprawidłowy";
    }

    if (!values.textarea) {
        errors.textarea = "Treść wiadomości jest wymagana";
    } else if (values.textarea.length < 12) {
        errors.textarea = "Podaj przynajmniej 15 znaków";
    }

    return errors;
}
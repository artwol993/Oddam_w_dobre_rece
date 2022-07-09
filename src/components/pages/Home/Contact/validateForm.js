export default function validateForm(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Podaj imie";
  } else if (values.textarea.length < 2) {
    errors.username = "Imie jest nieprawidłowe";
  }

  if (!values.email) {
    errors.email = "Podaj email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email jest nieprawidłowy";
  }

  if (!values.textarea) {
    errors.textarea = "Treść wiadomości jest wymagana";
  } else if (values.textarea.length < 10) {
    errors.textarea = "Podaj przynajmniej 10 znaków";
  }

  return errors;
}
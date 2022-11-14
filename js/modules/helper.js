export function takeInputs(formObj) {
  // paimti email is password reiksmes
  const userObj = {
    email: formObj.elements.email.value.trim(),
    password: formObj.elements.password.value.trim(),
  };
  return userObj;
}

export function loading(state) {
  return { type: "LOADING", payload: state };
}

export function signInErrors(data) {
  return { type: "SIGN_IN_ERRORS", payload: data };
}

export function signUpErrors(data) {
  return { type: "SIGN_UP_ERRORS", payload: data };
}

export function userAuthenticated(decoded, parsed) {
  return { type: "USER_AUTHENTICATED", payload: { decoded, parsed } };
}
export const resetInputs = { name: "", email: "", password: "", password2: "" };

export const registrationOK = { type: "REGISTRATION_OK" };

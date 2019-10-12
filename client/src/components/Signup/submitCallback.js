import axios from "axios";
import {
  loading,
  resetInputs,
  registrationOK,
  signUpErrors
} from "../../utils/actions";

export default (inputs, dispatch, props, setInputs) => {
  dispatch(loading(true));
  axios
    .post("/api/users/register", inputs)
    .then(res =>
      alert(`Registration OK. user: ${res.data.name} email: ${res.data.email}`)
    )
    .then(() => dispatch(registrationOK))
    .then(() => setInputs(resetInputs))
    .then(() => props.history.push("/login"))
    .catch(err => dispatch(signUpErrors(err.response.data)))
    .then(() => dispatch(loading(false)));
};

//we should put something else to notify users from succesful registration.
//This just redirects to /login if there's no errors

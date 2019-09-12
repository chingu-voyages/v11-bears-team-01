export default (inputs, dispatch) => {
  console.log(inputs);
  //Dummy data for testing the data flow, this should come from the backend
  const errors = {
    name: "No name provided",
    email: "No email provided",
    password: "No password",
    password2: `Passwords don't match`
  };
  dispatch({
    type: "SIGN_UP_ERRORS",
    payload: errors
  });
  //Here goes the call to the api passing the inputs values of the sign up form in body of the request
  //and then dispatch a bunch of actions to the context in response
  //such as the errors coming from the backend validation so that the UI renders them.
};

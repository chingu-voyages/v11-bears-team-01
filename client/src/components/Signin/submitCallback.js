export default (inputs, dispatch) => {
  console.log(inputs);
  
  //Dummy data for testing data flow
  const errors = {
    email: "No email provided",
    password: "No password"
  };
  dispatch({
    type: "SIGN_IN_ERRORS",
    payload: errors
  });
  //Here goes the call to the api passing the inputs values of the sign up form in body of the request
  //and then dispatch a bunch of actions to the context in response
  //such as the errors coming from the backend validation so that the UI renders them.
};

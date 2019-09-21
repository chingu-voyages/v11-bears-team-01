import React, { Component, useContext } from "react";
import { withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import GoogleLogin from 'react-google-login';
import {
  Form,
  Title,
  StyledH4,
  StyledLink,
  SubmitButton,
  Input
} from "../../styles/form-elements";
import { PulseLoader } from "react-spinners";
import useHandleInputs from "../../utils/useHandleInputs";
import useHandleSubmit from "../../utils/useHandleSubmit";
import cb from "./submitCallback";
import ErrorMessage from "../shared/ErrorMessage";
import { AuthContext } from "../../context/AuthContext";


const initialState = {
  email: "",
  password: ""
};

const SignIn = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleChange, inputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() => cb(inputs, dispatch, props));
  const { signInErrors: errors, loading } = store;

  const responseGoogle = async (response) => {
      //console.log(response);      //uncomment this line, comment out the UserObject, to see our response object
      const userObject = {      //TODO send to database
          name: response.w3.ofa,
          email: response.w3.U3,
          password: 'test',      //google does not send us password, assign default
          password2: 'test'      //google does not send us password, assign default
      }
      if(response.w3.ofa) {
          await localStorage.setItem("user", JSON.stringify(userObject));
          await window.location.reload();
      } else {}
  }

  return (
    <Landing>
      <Title>Log in</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          error={errors.email}
        ></Input>
        <ErrorMessage>{errors.email}</ErrorMessage>
        <Input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
        ></Input>
        <ErrorMessage>{errors.password}</ErrorMessage>
        <SubmitButton type="submit">
          {!loading ? (
            "Log in"
          ) : (
            <PulseLoader size={8} color={"#ffffff"} loading={loading} />
          )}
        </SubmitButton>
      </Form>
      <GoogleLogin
          clientId="448506538709-mieu0c2k5o9ao9s736l2c9v4rgluli7t.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
      />
      <StyledH4>
        Don't have an account? <StyledLink to="/sign-up">Sign up</StyledLink>
      </StyledH4>
    </Landing>
  )
};

export default withRouter(SignIn);

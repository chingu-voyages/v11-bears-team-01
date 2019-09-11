import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Form,
  Title,
  StyledH4,
  StyledLink,
  SubmitButton,
  Input,
  Error
} from "../../styles/form-elements";
import useHandleInputs from "../../utils/useHandleInputs";
import useHandleSubmit from "../../utils/useHandleSubmit";
import cb from "./submitCallback";
import { errorMessageContainer } from "../../styles/errorMessageContainer";
import { AuthContext } from "../../context/AuthContext";

const initialState = {
  email: "",
  password: ""
};

const SignIn = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleChange, inputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() => cb(inputs, dispatch));
  const { signInErrors: errors } = store;

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
        <span style={errorMessageContainer}>
          <Error>{errors.email}</Error>
        </span>
        <Input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
        ></Input>
        <span style={errorMessageContainer}>
          <Error>{errors.password}</Error>
        </span>
        <SubmitButton type="submit">Log in</SubmitButton>
      </Form>
      <StyledH4>
        Don't have an account? <StyledLink to="/sign-up">Sign up</StyledLink>
      </StyledH4>
    </Landing>
  );
};

export default withRouter(SignIn);

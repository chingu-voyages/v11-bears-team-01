import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Title,
  StyledH4,
  StyledLink,
  Form,
  SubmitButton,
  Input
} from "../../styles/form-elements";
import useHandleInputs from "../../utils/useHandleInputs";
import useHandleSubmit from "../../utils/useHandleSubmit";
import cb from "./submitCallback";
import ErrorMessage from "../shared/ErrorMessage";
import { AuthContext } from "../../context/AuthContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: ""
};

const SignUp = props => {
  const { store, dispatch } = useContext(AuthContext);
  const { handleChange, inputs, setInputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() =>
    cb(inputs, dispatch, props, setInputs)
  );
  const { signUpErrors: errors, loading } = store;

  return (
    <Landing>
      <Title>Sign up</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your username"
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          error={errors.name}
        ></Input>
        <ErrorMessage>{errors.name}</ErrorMessage>
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
          error={errors.password2}
        ></Input>
        <ErrorMessage>{errors.password}</ErrorMessage>
        <Input
          placeholder="Repeat your password"
          type="password"
          name="password2"
          value={inputs.password2}
          onChange={handleChange}
          error={errors.password2}
        ></Input>
        <ErrorMessage>{errors.password2}</ErrorMessage>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </Form>
      <StyledH4>
        Don't have an account? <StyledLink to="/login">Sign in</StyledLink>
      </StyledH4>
    </Landing>
  );
};

export default withRouter(SignUp);

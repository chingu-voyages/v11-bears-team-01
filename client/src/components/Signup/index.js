import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Title,
  StyledH4,
  StyledLink,
  Form,
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
  name: "",
  email: "",
  password: "",
  password2: ""
};

const SignUp = props => {
  const { store, dispatch } = useContext(AuthContext);
  const { handleChange, inputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() => cb(inputs, dispatch));
  const { signUpErrors: errors } = store;

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
        <span style={errorMessageContainer}>
          <Error>{errors.name}</Error>
        </span>
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
          error={errors.password2}
        ></Input>
        <span style={errorMessageContainer}>
          <Error>{errors.password}</Error>
        </span>
        <Input
          placeholder="Repeat your password"
          type="password"
          name="password2"
          value={inputs.password2}
          onChange={handleChange}
          error={errors.password2}
        ></Input>
        <span style={errorMessageContainer}>
          <Error>{errors.password2}</Error>
        </span>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </Form>
      <StyledH4>
        Don't have an account? <StyledLink to="/login">Sign in</StyledLink>
      </StyledH4>
    </Landing>
  );
};

export default withRouter(SignUp);

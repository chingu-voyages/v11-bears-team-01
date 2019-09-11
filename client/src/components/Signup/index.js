import React from "react";
import { Link, withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Title,
  StyledH4,
  Form,
  SubmitButton,
  Input
} from "../../styles/form-elements";
import useHandleInputs from "../../utils/useHandleInputs";
import useHandleSubmit from "../../utils/useHandleSubmit";
import cb from "./submitCallback";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: ""
};

const SignUp = props => {
  const { handleChange, inputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() => cb(props));

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
        ></Input>
        <Input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        ></Input>
        <Input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        ></Input>
        <Input
          placeholder="Repeat your password"
          type="password"
          name="password2"
          value={inputs.password2}
          onChange={handleChange}
        ></Input>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </Form>
      <StyledH4>
        Don't have an account? <Link to="/login">Sign in</Link>
      </StyledH4>
    </Landing>
  );
};

export default withRouter(SignUp);

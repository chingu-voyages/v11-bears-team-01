import React from "react";
import { Link, withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Form,
  Title,
  StyledH4,
  SubmitButton,
  Input
} from "../../styles/form-elements";
import useHandleInputs from "../../utils/useHandleInputs";
import useHandleSubmit from "../../utils/useHandleSubmit";
import cb from "./submitCallback";

const initialState = {
  email: "",
  password: ""
};

const SignIn = props => {
  const { handleChange, inputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() => cb(props));

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
        ></Input>
        <Input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        ></Input>
        <SubmitButton type="submit">Log in</SubmitButton>
      </Form>
      <StyledH4>
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </StyledH4>
    </Landing>
  );
};

export default withRouter(SignIn);

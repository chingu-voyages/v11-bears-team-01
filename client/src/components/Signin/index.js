import React from "react";
import { Link } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Form,
  Title,
  Subtitle,
  SubmitButton,
  Input
} from "../shared/styles/form-elements";
import useHandleInputs from "../shared/custom-hooks/useHandleInputs";

const initialState = {
  email: "",
  password: ""
};

export default () => {
  const { handleChange, inputs } = useHandleInputs(initialState);
  return (
    <Landing>
      <Title>Log in</Title>
      <Form>
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
      <Subtitle>
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </Subtitle>
    </Landing>
  );
};

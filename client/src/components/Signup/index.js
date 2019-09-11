import React from "react";
import { Link } from "react-router-dom";
import Landing from "../Landing/index";
import {
  Title,
  Subtitle,
  Form,
  SubmitButton,
  Input
} from "../shared/styles/form-elements";
import useHandleInputs from "../shared/custom-hooks/useHandleInputs";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: ""
};

export default () => {
  const { handleChange, inputs } = useHandleInputs(initialState);
  return (
    <Landing>
      <Title>Sign up</Title>
      <Form>
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
      <Subtitle>
        Don't have an account? <Link to="/login">Sign in</Link>
      </Subtitle>
    </Landing>
  );
};

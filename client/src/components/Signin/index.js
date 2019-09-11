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

export default () => {
  return (
    <Landing>
      <Title>Log in</Title>
      <Form>
        <Input placeholder="Enter your email"></Input>
        <Input placeholder="Enter your password"></Input>
        <SubmitButton type="submit">Log in</SubmitButton>
      </Form>
      <Subtitle>
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </Subtitle>
    </Landing>
  );
};

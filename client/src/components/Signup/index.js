import React from "react";
import { Link } from "react-router-dom";
import Landing from "../Landing/index";
import { Title, Subtitle, Form, SubmitButton, Input } from "../Form/styles";

export default () => {
  return (
    <Landing>
      <Title>Sign up</Title>
      <Form>
        <Input placeholder="Enter your username"></Input>
        <Input placeholder="Enter your email"></Input>
        <Input placeholder="Enter your password"></Input>
        <Input placeholder="Repeat your password"></Input>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </Form>
      <Subtitle>
        Don't have an account? <Link to="/login">Sign in</Link>
      </Subtitle>
    </Landing>
  );
};

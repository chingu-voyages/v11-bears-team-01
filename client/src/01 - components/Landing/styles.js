import styled from "styled-components";

export const LandingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: red;
  font-family: "Archivo", sans-serif;
`;

export const Landing = styled.div`
  flex-basis: 62.5%;
  background-color: #f7f7fc;
  padding: 1em;
`;

export const AuthWrapper = styled.div`
  flex-basis: 37.5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
  align-items: center;
  justify-content: center;
`;

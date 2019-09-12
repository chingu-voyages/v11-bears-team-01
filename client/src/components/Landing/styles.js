import styled from "styled-components";

export const LandingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  font-family: "Archivo", sans-serif;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Landing = styled.div`
  flex-basis: 62.5%;
  background-color: #f7f7fc;
  padding: 1em;
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
  @media (max-width: 992px) {
  }
`;

export const AuthWrapper = styled.div`
  flex-basis: 37.5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
`;

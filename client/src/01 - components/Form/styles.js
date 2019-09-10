import styled from "styled-components";

export const Form = styled.form`
  padding: 45px 36px;
  background: white;
  border-radius: 2px;
  max-width: 384px;
  box-shadow: 0 15px 75px rgba(139, 140, 185, 0.118178);
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
  font-weight: 500;
  color: #131e41;
`;

export const Subtitle = styled.h4`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: #131e41;
  margin-top: 42px;
`;

export const SubmitButton = styled.button`
  border: 1px solid #1c01ff;
  background: #1c01ff;
  color: white;
  font-size: 14px;
  height: 42px;
  font-family: "Archivo", sans-serif;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 2px;
  padding: 0 15px;
  width: 100%;
  margin-top: 5px;
  outline: none;
`;

export const Input = styled.input`
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  width: 288px;
  padding: 0 15px;
  transition: 0.2s all cubic-bezier(0.4, 0, 0.2, 1);
  color: #131e41;
  font-family: "Archivo", sans-serif;
  margin: 0;
  height: 44px;
  border-radius: 2px;
  background: #fcfcff;
  border: ${props => (props.error ? "1px solid #FD1941" : "1px solid #cdcee4")};
  caret-color: #1c01ff;
  margin: 0px 0px 20px 0px;

  &:focus {
    border-color: #1c01ff;
    outline: none;
  }
`;

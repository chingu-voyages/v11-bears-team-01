import styled from "styled-components";

export default styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  border: none;
  background-color: #fff;
  width: 100%;
  font-family: "Archivo", sans-serif;
  padding: 15px 10px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: rgba(19, 30, 65, 0.6);
  &:hover {
    background: rgba(205, 206, 228, 0.4);
    color: rgba(19, 30, 65, 0.8);
  }
  &:focus {
    outline: none;
  }
`;

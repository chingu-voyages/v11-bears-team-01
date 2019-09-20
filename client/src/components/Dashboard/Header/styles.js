import styled from "styled-components";
import { User } from "styled-icons/boxicons-regular/User";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";
import { colors } from "../../../styles/vars";

export const Header = styled.header`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4em;
  background-color: #fff;
  box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.1);
  font-family: "Archivo", sans-serif;
`;

//container for each section of the header
export const Section = styled.section`
  display: flex;
  flex: ${props => props.flex};
  height: 100%;
  justify-content: ${props => props.justify};
  align-items: center;
  margin: 0 40px;
`;

export const UserIcon = styled(User)`
  margin: 0 10px 0 17px;
`;

export const Text = styled.p`
  line-height: 22px;
  font-weight: 500;
`;

export const Arrow = styled(KeyboardArrowDown)`
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 100%;
  color: ${colors.fontBlack};
  cursor: ${props => (props.pointer ? "pointer" : "auto")};
  width: auto;

  &:hover ${UserIcon}, &:hover ${Text}, &:hover ${Arrow} {
    color: ${colors.blue};
    transition: all 0.4s ease;
  }
`;
//dropdown menu
export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4em;
  right: 15px;
  height: auto;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
`;

export const LogOutIcon = styled(LogOut)`
  margin-right: 7px;
`;

export const DropdownButton = styled.button`
  position: relative;
  z-index: 1005;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  margin: 0;
  /* background: red; */
  background-color: #fff;
  text-align: left;
  border: none;
  cursor: pointer;
  font-family: "Archivo", sans-serif;
  color: rgba(19, 30, 65, 0.6);
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: rgba(205, 206, 228, 0.4);
    color: rgba(19, 30, 65, 0.8);
  }
  &:focus {
    outline: none;
  }
`;

import styled from "styled-components";
import { User } from "styled-icons/boxicons-regular/User";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";
import { colors } from "../../../styles/vars";

export const Header = styled.nav`
  display: flex;
  position: fixed;
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
  margin: 0 20px;
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

export const Wrapper = styled(Section)`
  font-size: 15px;
  color: ${colors.fontBlack};
  cursor: ${props => (props.pointer ? "pointer" : "auto")};
  width: auto;

  &:hover ${UserIcon}, &:hover ${Text}, &:hover ${Arrow} {
    color: ${colors.blue};
    transition: all 0.4s ease;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  position: absolute;
  top: 4em;
  right: 15px;
  height: 5em;
  width: 250px;
  background-color: #fff;
  border: 1px solid #fcfcff;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
`;

export const DropdownBlock = styled.li`
  width: 100%;
  list-style: none;
`;

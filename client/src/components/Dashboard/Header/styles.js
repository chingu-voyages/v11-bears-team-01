import styled from "styled-components";
import { User } from "styled-icons/boxicons-regular/User";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";
import { colors } from "../../../styles/vars";

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

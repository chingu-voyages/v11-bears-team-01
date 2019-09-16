import React from "react";
import { Section, Text, UserIcon, Wrapper, Arrow } from "./styles";
import useOpenMenu from "./useOpenMenu";

export default ({ user, handleOpenMenu }) => {
  // const { handleOpenMenu } = useOpenMenu();
  return (
    <React.Fragment>
      <Section flex={"1"} justify={"flex-end"} style={{ background: "" }}>
        <Wrapper
          style={{
            borderLeft: "1px solid rgba(205, 206, 228, 0.6)",
            background: ""
          }}
          pointer
          onClick={handleOpenMenu}
        >
          <UserIcon color={"#CDCEE4"} size={"23px"} />
          <Text>{user.name}</Text>
          <Arrow color={"#CDCEE4"} size={"23px"} />
        </Wrapper>
      </Section>
    </React.Fragment>
  );
};

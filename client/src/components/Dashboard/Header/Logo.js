import React from "react";
import { Section, Wrapper } from "./styles";
import { Bicycle } from "styled-icons/fa-solid/Bicycle";

export default () => (
  <Section flex={"1"} style={{ background: "" }}>
    <Wrapper>
      <Bicycle
        size={"35px"}
        title="bicycle-icon"
        color={"rgba(19, 30, 65, 0.8)"}
      />
    </Wrapper>
  </Section>
);

//Here should go the name of the app, though display: none with small screens

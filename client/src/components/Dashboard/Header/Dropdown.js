import React from "react";
import { Dropdown, DropdownBlock, Button } from "./styles";

export default () => {
  return (
    <React.Fragment>
      <Dropdown>
        <DropdownBlock>
          <Button>Log out</Button>
        </DropdownBlock>
      </Dropdown>
    </React.Fragment>
  );
};

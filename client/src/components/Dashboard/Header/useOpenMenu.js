import { useState } from "react";

export default () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return {
    openMenu,
    handleOpenMenu
  };
};

import React from "react";
import { SearchBox, SearchButton, SearchTxt } from "./HeaderSearchMenuCss";
import { IoSearchOutline } from "react-icons/io5";
function HeaderSearchMenu(props) {
  return (
    <SearchBox action="" method="get">
      <SearchTxt type="text"></SearchTxt>
      <SearchButton type="submit">
        <IoSearchOutline />
      </SearchButton>
    </SearchBox>
  );
}

export default HeaderSearchMenu;

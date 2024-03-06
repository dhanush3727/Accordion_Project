import React from "react";
import MenuItem from "./MenuItem";
import "./TreeView.css";

const MenuList = ({ list }) => {
  return (
    <ul className="menuList-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;

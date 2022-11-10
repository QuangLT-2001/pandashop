import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems, SubMenuItems } from "./style";
import PropTypes from "prop-types";
export const SubMenuItem = ({
  subMenuItem,
  root,
  onClick,
  color

}) => {
  const { name, path } = subMenuItem;
  return (
    <SubMenuItems
    className="sub-menu-item"
    color={color.name}
    >
      <NavLink
        className="sub-menu-link"
        activeClassName="active"
        to={`/${root}/${path}`}
        exact
        onClick={onClick}
        >
        {name}
      </NavLink>
    </SubMenuItems>
  );
}
const MenuItem = ({
  menuItem,
  type ,
  onClick,
  color
}) => {
  const { name, path:root, icon, subMenu } = menuItem;
  return (
    <MenuItems
      className="menu-item"
      type={type}
      subMenu={subMenu}
      onClick={onClick}
      color={color.name}
      >
      <NavLink
        to={`/${root}`}
        exact
        className="menu-link"
        activeClassName="active"
      >
        {icon}
        {name}
      </NavLink>
      {subMenu && <ul className="sub-menu">
        {subMenu.map(item => {
          return <SubMenuItem
          onClick={onClick}
          root={root}
          subMenuItem={item}
          key={item.id}
          color={color}
          />
        })}
      </ul>}
    </MenuItems>
  );
}
MenuItem.propTypes = {
  menuItem: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.object
}
SubMenuItem.propTypes = {
  subMenuItem: PropTypes.object,
  root: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.object
}
export default MenuItem;
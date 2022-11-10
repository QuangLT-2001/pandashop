import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderTopBottomItems } from "./style";
import PropTypes from "prop-types";
const HeaderTopBottomItem = ({headerTopBottomItem}) => {
  const {name, path} = headerTopBottomItem;
  return(
    <HeaderTopBottomItems className="header-top-bottom-item">
      <NavLink to={`/san-pham/${path}`} exact className="menu-link">
        {name}
      </NavLink>
    </HeaderTopBottomItems>
  );
}
HeaderTopBottomItem.propTypes = {
  headerTopBottomItem: PropTypes.object
}
export default HeaderTopBottomItem;
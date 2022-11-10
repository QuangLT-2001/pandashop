import React from "react";
import { NavLink } from "react-router-dom";
import { TabItems } from "./style";
import PropTypes from "prop-types";

const TabItem = ({tabItem}) =>  {
  return(
    <TabItems className="tab-item">
      <NavLink to={`/san-pham/${tabItem.path}`}>
        {tabItem.label}
      </NavLink>
    </TabItems>
  );
}
TabItem.propTypes = {
  tabItem: PropTypes.object
}
export default TabItem;
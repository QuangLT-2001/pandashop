import React from "react";
import { NavLink } from "react-router-dom";
import { NamePageWrapper } from "./style";
import PropTypes from "prop-types";
const NamePage = props => {
    const {name, nameLink, to} = props;
    return(
        <NamePageWrapper className="name-page">
            <NavLink className="link-to" exact to={to}>{nameLink}</NavLink>
            {name}
        </NamePageWrapper>
    );
}

NamePage.propTypes = {
    name: PropTypes.string,
    nameLink: PropTypes.string,
    to: PropTypes.string.isRequired
}

export default NamePage;
import React from "react";
import PropTypes from "prop-types";

const TitlePage = props => {
    const { name } = props;
    return (
        <title>{name}</title>
    );
}

TitlePage.propTypes = {
    name: PropTypes.string
}
export default TitlePage;
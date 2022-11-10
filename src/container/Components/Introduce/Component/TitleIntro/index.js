import React from "react";
import { TitleIntros } from "./style";
import PropTypes from "prop-types";
const TitleIntro = props => {
    const {name} = props;
    return(
        <TitleIntros className="name-intro">
            {name}
        </TitleIntros>
    );
}
TitleIntro.propTypes = {
    name: PropTypes.string
}
export default TitleIntro;
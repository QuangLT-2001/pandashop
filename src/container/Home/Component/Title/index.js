import React from "react";
import { TitleContent } from "./style";
import PropTypes from "prop-types";
const Title = props => {
    const {name, className} = props;
    return(
        <TitleContent className={className}>
            {name}
        </TitleContent>
    );
}
Title.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
}
export default Title;
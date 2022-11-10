import React from 'react';
import { ButtonWrapper } from './style';
import PropTypes from "prop-types";

const Buttons = props => {
    const {
        name,
        type,
        className,
        onClick,
        disabled,
        icon,
        color
    } = props;
    return (
        <ButtonWrapper
            onClick={onClick}
            className={className}
            type={type}
            disabled={disabled}
            color={color}
        >
            {icon}
            {name}
        </ButtonWrapper>
    );
}

Buttons.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    icon: PropTypes.object,
    color: PropTypes.object
}

export default Buttons;
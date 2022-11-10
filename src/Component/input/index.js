import React from 'react';
import { InputWrapper } from './style';
import PropTypes from "prop-types";
const Input = props => {
    const {
        type,
        name,
        value,
        placeholder,
        className,
        onChange,
        id,
        nameLabel,
        checked,
        icon,
        ref,
        onBlur,
        onFocus
    } = props;
    return (
        <InputWrapper

        nameLabel={nameLabel}
        className="input"
        icon={icon}
        name={name}

        >
            <label htmlFor={id}>
                {nameLabel}
            </label>
            <input
                autoComplete="off"
                id={id}
                className={className}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                checked={checked}
                ref={ref}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {icon && <span className="icon">
                {icon}
            </span>}
        </InputWrapper>
    );
}


Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    nameLabel: PropTypes.string,
    checked: PropTypes.bool,
    icon: PropTypes.object
}

export default Input;
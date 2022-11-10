import React from 'react';
import { SelectOptionWrapper,  LabelOption, SelectWrapper  } from './style';
import Select from "react-select";
import PropTypes from "prop-types";
const SelectOption = props => {
    const {
        option,
        nameSort,
        nameSelect,
        handleSelectChange,
        value,
        className,
        placeholder
    } = props;


    return (
        <SelectWrapper className='select-wrapper'>
            <Select
            options={option}
            placeholder={placeholder}
            onChange={handleSelectChange}
            className={className}
            />
        </SelectWrapper>
        // <LabelOption className={className}>
        //     <label htmlFor={nameSelect}>{nameSort}</label>
        //     <SelectOptionWrapper value={value} id={nameSelect} onChange={handleSelectChange} name={value}>
        //         {option.map(item => {
        //             return <option key={item.id} name={item.name} value={item.id}>
        //                 {item.name}
        //             </option>
        //         })}
        //     </SelectOptionWrapper>
        // </LabelOption>
    );
}
SelectOption.propTypes = {
    option: PropTypes.array.isRequired,
        nameSort: PropTypes.string,
        nameSelect: PropTypes.string,
        handleSelectChange: PropTypes.func.isRequired,
        value: PropTypes.number,
        className: PropTypes.string
}
export default SelectOption;
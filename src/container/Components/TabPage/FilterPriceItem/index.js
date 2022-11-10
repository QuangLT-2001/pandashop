import React from "react";
import PropTypes from "prop-types";
import RadioButton from "../../../../Component/Radio";
const FilerByPriceItem = ({
  filterByPriceItem,
  onChange,
}) => {
  const { label, id } = filterByPriceItem;
  return (
    <RadioButton
      value={id}
      onChange={onChange}
      label={label}

    />
  );
}

FilerByPriceItem.propTypes = {
  filterByPriceItem: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default FilerByPriceItem;
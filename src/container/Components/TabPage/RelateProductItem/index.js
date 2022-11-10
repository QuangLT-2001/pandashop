import React, { memo } from "react";
import { RelateProductItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
import PropTypes from "prop-types";
import MyImage from "../../../../Component/Image";
const RelateProductItem = ({ productItem, color, onClick }) => {
  const {
    avatar,
    name,
    price,
    discount,
  } = productItem;
  const formatPrice = formatMoney(price);
  const formatDisCountContent = formatMoney(discount);
  return (
    <RelateProductItems
      className="relate-product-item"
      color={color}
    >
      <div className="relate-left">
        <MyImage
          image={avatar}
          name={name}
          onClick={onClick}
          width="100px"
          height="100px"
        />
      </div>
      <div className="info">
        <h3
          className="name-product"
          onClick={onClick}
        >
          {name}
        </h3>
        <div className="price">
          <p className="price-text">{formatPrice} đ</p>
          {discount && <p className="price-discount-content">{formatDisCountContent} đ</p>}
        </div>
      </div>
    </RelateProductItems>
  );
}

RelateProductItem.propTypes = {
  productItem: PropTypes.object,
  color: PropTypes.object,
  onClick: PropTypes.func
}

export default memo(RelateProductItem);
import React, { memo } from "react";
import { SellingItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
import PropTypes from "prop-types";
import MyImage from "../../../../Component/Image";
const SellingItem = ({
  sellingItem,
  history,
  className,
  color
}) => {
  const { name, avatar, discount, price, id, discountContent } = sellingItem;
  const formatPrice = formatMoney(price);
  const formatDiscount = formatMoney(discount)
  const handleClickToDetail = productId => {
    history.push(`/san-pham/${productId}`);
  }
  return (
    <SellingItems
    className={className}
    discountContent={discountContent}
    formatDiscount = {formatDiscount}
    color={color}
    >
      <MyImage
      image={avatar}
      name={name}
      onClick={() => handleClickToDetail(id)}
      width="100%"
      />
      <h4 className="title-product" onClick={() => handleClickToDetail(id)}>

        {name}
      </h4>
      {discount && <span className="discount">
        đ
      </span>}
      <span className="price">
        {formatPrice}đ
      </span>
    </SellingItems>
  );
}

SellingItem.propTypes = {
  sellingItem: PropTypes.object,
  history: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.object
}
export default memo(SellingItem);
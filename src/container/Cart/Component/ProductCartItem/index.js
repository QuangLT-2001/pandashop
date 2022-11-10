import React, { useState } from "react";
import { ProductCartItems } from "./style";
import Input from "./../../../../Component/input";
import { formatMoney } from "./../../../../Component/Format";
import Buttons from "../../../../Component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import PropTypes from "prop-types";

const ProductCartItem = ({
  productCartItem,
  onClick,
  handlePutProductCart,
}) => {
  const {
    color,
    name,
    price,
    quantity,
    size,
    avatar,
    brand,
    id,
  } = productCartItem;
  const [counter, setCounter] = useState(quantity)
  const formatPrice = formatMoney(price * counter)
  const handleClickIncrement = () => {
    setCounter(counter + 1);
    // setSum(state => state += 1)

  }


  const handleClickDecrement = () => {
    setCounter(counter > 1 ? counter - 1 : 1)
    // setSum(state => state -= 1)
  }

  return (
    <ProductCartItems className="product-cart-item">
      <img src={avatar} alt="" />
      <div className="info-right">
        <div className="info">
          <h4 className="name-product">
            {name}
          </h4>
          <p className="relate-info">
            Thương hiệu: {brand},
            {color && ` Nhóm màu: ${color.name} `},
            {size && `Size: ${size.name}`}
          </p>
        </div>
        <span className="price-text">
          {formatPrice}đ
        </span>

        <div className="quantity">
          <Buttons
            name="-"
            type="counter"
            className={`counter decrement ${counter === 1 && 'disabled'}`}
            onClick={handleClickDecrement}
            disabled={counter === 1}
          />
          <span className="quantity-text">
            {counter}
          </span>
          <Buttons
            name="+"
            type="counter"
            className={`counter increment ${counter === 10 && 'disabled'}`}
            onClick={handleClickIncrement}
            disabled={counter === 10}
          />
        </div>
        <Buttons icon={
          <FontAwesomeIcon icon={faTrashAlt} />
        }
        name="Xóa"
        className="btn-delete"
        onClick={() => onClick(id)}
        />
      </div>
    </ProductCartItems>
  );
}

ProductCartItem.propTypes = {
  productCartItem: PropTypes.object,
  onClick: PropTypes.func,
  handlePutProductCart: PropTypes.func
}
export default ProductCartItem;
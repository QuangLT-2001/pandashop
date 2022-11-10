import React from "react";
import { MessageCartWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Buttons from "./../../../../Component/Button";
import { formatMoney } from "./../../../../Component/Format";
import ProductItem from "./../../../Home/Component/ProductItem"
import _map from "lodash/map"
import _slice from "lodash/slice"
import PropTypes from "prop-types";
const MessageCart = ({
  productCart,
  listProduct,
  history,
  handleClickCloseCart,
  counter,
  id,
  color: colorTheme
}) => {
  const {
    name,
    avatar,
    size,
    quantity,
    color, price,

  } = productCart;
  const formathPrice = formatMoney(price * counter);
  const body = document.querySelector("body")
  const handleClickToCart = () => {
    body.classList.remove("hidden")
    history.push("/gio-hang")

  }
  const handleClickToDetail = () => {
    history.push(`/san-pham/${id}`);
    body.classList.remove("hidden")
  }
  console.log("color", color, "size", size);
  return (
    <MessageCartWrapper
      className="message-cart"
      color={colorTheme}
    >
      <div className="message-content">
        <span className="close-message">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleClickCloseCart} />
        </span>
        <div
          className="content">
          <div className="product-to-cart">
            <p className="message-text">
              1 sản phẩm mới được thêm vào giỏ hàng của bạn
            </p>
            <div className="product-cart">
              <img src={avatar} alt="" onClick={handleClickToDetail} />
              <div className="info">
                <h3 className="name-product" onClick={handleClickToDetail}>
                  {name}
                </h3>
                <p className="relate-info">
                  Nhóm màu: {color.name}, Size: {size.name}
                </p>
                <span className="price">
                  {formathPrice} đ
                </span>
                <div className="check">
                  <span className="quantity">
                    Số lượng: X{quantity}
                  </span>
                  <Buttons
                    name="đến giỏ hàng"
                    type="to"
                    onClick={handleClickToCart}
                    color={colorTheme}
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container-fluid list-product">
          <div className="row">
            <h3 className="title">
              Bạn có thể quan tâm
            </h3>
            {_map(_slice(listProduct, 0, 3), item => {
              return <ProductItem
                className="col-lg-4 col-md-4 col-sm-6 col-6"
                key={item.id}
                productItem={item}
                nameButton="Xem thông tin"
                history={history}
                type="border"
                color={colorTheme}
              />
            })}
          </div>
        </div>
      </div>
    </MessageCartWrapper>
  );
}

MessageCart.propTypes = {
  productCart: PropTypes.object.isRequired,
  history: PropTypes.object,
  handleClickCloseCart: PropTypes.func.isRequired,
  counter: PropTypes.number,
  id: PropTypes.string.isRequired,
  color: PropTypes.object
}

export default MessageCart;
import React from "react";
import { ProductPaymentItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
import Buttons from "../../../../Component/Button";
import Message from "../Message";
import { useState } from "react";
import PropTypes from "prop-types"
const ProductPaymentItem = props => {
     const {
          productPaymentItem,
          index,
          handleClickDeleteProduct
     } = props;
     const [check, setCheck] = useState(false);
     const {
          address,
          avatar,
          brand,
          color,
          name,
          quantity,
          size,
          tel,
          user,
          price,
          id
     } = productPaymentItem
     if (!price) return null;
     const formatPrice = formatMoney(price);
     const body = document.querySelector("body");
     const handleClickCancel = () => {
          setCheck(true);
          body.classList.add("hidden")
     }
     const handleClickCloseMessage = () => {
          setCheck(false);
          body.classList.remove("hidden")
     }

     return (
          <>
               {check && <Message
                    handleClickCancel={handleClickCloseMessage}
                    handleClickDeleteProduct={() => handleClickDeleteProduct(id, setCheck)}
               />}
               <ProductPaymentItems>
                    <img src={avatar} alt={name} />
                    <div className="info-product">
                         <h4 className="name-product">
                              {name}
                         </h4>
                         <p>
                              {color && <span className="color">
                                   Nhóm màu: {color.name}
                              </span>}

                              {size && <span className="size">
                                   Size:
                                   {size.name}</span>}
                              <span className="brand">
                                   Thương hiệu: {brand}
                              </span>
                         </p>
                         <p className="price">
                         <span className="quantity">
                              Số lượng: x {quantity} |
                         </span>
                         <span className="price">
                              Giá: <span className="price-text">
                              {formatPrice}đ
                              </span>
                         </span>
                         </p>
                    </div>

                    <Buttons
                         type="comeBack"
                         className="btn-cancel"
                         name="Hủy đơn"
                         onClick={handleClickCancel}
                    />

               </ProductPaymentItems>
          </>
     );
}
ProductPaymentItem.propTypes = {
     productPaymentItem: PropTypes.object,
     index: PropTypes.number,
     handleClickDeleteProduct: PropTypes.func
}
export default ProductPaymentItem;
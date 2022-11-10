import React from "react";
import { SearchItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
import PropTypes from "prop-types";
const SearchItem = props => {
     const { searchItem, onClick } = props;
     const {
          avatar,
          name,
          price,
          discount,
          discountContent,
          id,
          brand,
          size,
          color,
          quantity
     } = searchItem;

     return (
          <SearchItems className="search-item">
               <img
                    src={avatar}
                    alt=""
                    onClick={() => onClick(id)} />
               <div className="info">
                    <h4
                         className="name-product"
                         onClick={() => onClick(id)}>
                         {name}
                    </h4>
                    <span className="price">
                         Giá: {`${formatMoney(price)} đ`}
                    </span>
                    <p className="character">
                         {size.length && <span className="size">
                              Size: <b>
                                   {size[0].name}
                              </b>
                         </span>}
                         {color.length && <span className="color">
                              Color: <b>
                                   {color[0].name}
                              </b>
                         </span>}
                    </p>
                    <h4 className="brand">
                         Mã SP: <span className="brand-uppercase">
                              {brand ? brand : "không có"}
                         </span>
                    </h4>
                    <span className="quantity">
                         Số lượng: <b>{quantity} </b>
                    </span>
               </div>
          </SearchItems>
     );
}
SearchItem.propTypes = {
     searchItem: PropTypes.object,
     onClick: PropTypes.func
}
export default SearchItem;
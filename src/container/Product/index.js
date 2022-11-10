import React, { useEffect, useState } from "react";
import { ProductWrapper } from "./style";
import _ from 'lodash';
import TabPage from "./../Components/TabPage";
import {  useSelector } from 'react-redux';
import {
  selectColor
} from "./selector"
import PropTypes from "prop-types";
import Meta from "../../Component/Meta";
const Product = props => {
  const {
    products,
    titlePages,
    history,
    url
  } = props;
  // xử lý mapStateToProps;
  const color = useSelector(selectColor);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <ProductWrapper className="product">
      <Meta
        image="http://www.shoppanda.net/assets/images/product/subImage/product-1-1.webp"
        description="Các mặt hàng của Shop Panda"
        url={url}
        title="Các mặt hàng của Shop Panda"
        titlePage={titlePages}
      />
      <div className="page container-fluid">
        <TabPage
          products={products}
          history={history}
          nameLink="Trang chủ"
          to="/"
          color={color}
        />
      </div>
    </ProductWrapper>
  );
}


Product.propTypes = {
  products: PropTypes.array.isRequired,
  titlePages: PropTypes.string,
  history: PropTypes.object,

}

export default Product;
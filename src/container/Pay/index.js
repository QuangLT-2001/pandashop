import React, { memo } from "react";
import { ListProduct, PayWrapper } from "./style";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {

} from "./selector"
import Loading from "../Components/Loading";
import _ from 'lodash';
import {
  getProductInPaymentRequest,
  deleteProductInPaymentRequest
} from "./actions";
import {
  selectIsLoading,
  selectProducts
} from "./selector"
import TitlePage from "../../Component/Title";
import ProductPaymentItem from "./Components/ProductItem";
import Empty from "../Components/Empty";
import { useHistory } from "react-router-dom";
import Meta from "../../Component/Meta";
const Pay = props => {
  const history = useHistory();
  // xử lý mapStateToProps;
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading)
  // xử lý mapDispatchToProps
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductInPaymentRequest());
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, []);
  const handleClickToHome = () => {
    history.push("/");
  }
  const body = document.querySelector("body");
  const handleClickDeleteProduct = (id, setCheck) => {
    dispatch(deleteProductInPaymentRequest(id))
    setCheck(false);
    body.classList.remove("hidden")
  }
  if (!products.length) return <>
    <TitlePage name="Đơn Hàng" />
    <Empty onClick={handleClickToHome} name="Không có sản phẩm trong đơn hàng" />
  </>

  if (isLoading) return <>
    <Meta
      image="http://www.shoppanda.net/assets/images/logo/logo.png"
      description="Đơn hàng là nơi lưu trữ các sản phẩm bạn đã đặt tại shop "
      url="http://www.shoppanda.net/don-hang/"
      title="Đơn Hàng"
      titlePage="Đơn Hàng"
    />
    <Loading />
  </>
  return (
    <PayWrapper className="payment-wrapper">
      <Meta
        image="http://www.shoppanda.net/assets/images/logo/logo10.png"
        description="Đơn hàng là nơi lưu trữ các sản phẩm bạn đã đặt tại shop "
        url="http://www.shoppanda.net/don-hang/"
        title="Đơn Hàng"
        titlePage="Đơn Hàng"
      />

      <div className="container">
        <h3 className="title-page">
          Đơn hàng của bạn
        </h3>

        <ListProduct className="list-product">
          {products && products.map((item, index) => {
            return <ProductPaymentItem
              handleClickDeleteProduct={handleClickDeleteProduct}
              key={item.id}
              productPaymentItem={item}
              index={index}
            />
          })}
        </ListProduct>
      </div>
    </PayWrapper>
  );
}
export default memo(Pay);
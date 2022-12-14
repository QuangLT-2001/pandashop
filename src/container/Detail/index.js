import React, { useEffect, useState, memo } from "react";
import {
  getProductDetailRequest,
  handleDecrement,
  handleIncrement,
  getListProductRequest,
  postProductToCartRequest,
  handleClickCloseMessage,
  postProductToPaymentRequest
} from "./action";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDetail,
  selectIsLoading,
  selectCounter,
  selectProducts,
  selectCheck,
  selectProductCart,
  selectColors,
  selectCheckPayment
} from "./selector";
import Loading from "../Components/Loading";
import {
  SelectItems,
  DetailWrapper,
  IndicatorItems,
  ProductDetailWrapper,
  SelectDeliveryWrapper,
  DescriptionProductWrapper,
  DescriptContents,
  ProductInvolveWrapper,
  FormPayment
} from "./style";
import _slice from "lodash/slice"
import _forEach from "lodash/forEach"
import _map from "lodash/map"
import _uniq from "lodash/uniq"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faInfoCircle,
  faMoneyBillWave,
  faHistory,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faHandshake
} from "@fortawesome/free-regular-svg-icons"
import Button from "./../../Component/Button";
import { formatMoney } from "./../../Component/Format";
import ProductItem from './../Home/Component/ProductItem'
import { useParams } from "react-router-dom";
import MessageCart from "./Components/MessageCart";

import Comment from "../Components/Comment";
import PropTypes from "prop-types";
import Input from "./../../Component/input";
import ErrorPay from "./Components/Error";
import MessagePay from "./Components/MessagePay";
import Meta from "./../../Component/Meta";
import MyImage from "./../../Component/Image";
import Buttons from "./../../Component/Button"
import Error from "../Components/Error";

const IndicatorItem = ({
  indicatorItem,
  active,
  handleClickChangeIndex
}) => {
  const { src } = indicatorItem;
  return (
    <IndicatorItems onClick={handleClickChangeIndex} className={`${active && 'active'} indicator-item`}>

      <MyImage
        image={src}
        name="indicator"
        width="100%"
        height="100%"
      />
    </IndicatorItems>
  );
}

const SelectItem = ({
  selectItem,
  active,
  handleClickChangeSelect,
  color
}) => {
  return (
    <SelectItems
      color={color}
      className={`select-item ${active && "active"}`}
      onClick={handleClickChangeSelect}
    >
      {selectItem}
    </SelectItems>
  );
}
const DescriptContent = ({ descriptContent }) => {
  return (
    <DescriptContents className="descript-content">
      {descriptContent}
    </DescriptContents>
  );
}
const ImageProduct = ({ imageProduct }) => {
  const { src } = imageProduct;
  return (
    <MyImage image={src} />
  );
}
const Detail = (props) => {
  const {
    history,
    match: { params: { id } },
  } = props;

  // x??? l?? mapStateToProps;
  const isLoading = useSelector(selectIsLoading);
  const detail = useSelector(selectDetail);
  const counter = useSelector(selectCounter);
  const products = useSelector(selectProducts);
  const check = useSelector(selectCheck);
  const productCart = useSelector(selectProductCart);
  const colorTheme = useSelector(selectColors);
  const checkPayment = useSelector(selectCheckPayment);
  // x??? l?? mapDispatchToProps;
  const dispatch = useDispatch();
  const [currentRoot, setCurrentRoot] = useState("");
  const params = useParams();
  let [index, setIndex] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState(0)
  const [checkInfo, setCheckInfo] = useState(false);
  const [state, setState] = useState({
    frmUser: "",
    frmTel: "",
    frmAddress: ""
  })
  const [checkPay, setCheckPay] = useState(false)
  useEffect(() => {
    setCurrentRoot(params.id);
    dispatch(getProductDetailRequest(+id))
    dispatch(getListProductRequest());
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })


  }, [params]);
  if (isLoading) return <>

    <Meta
      image="http://www.shoppanda.net/assets/images/banner/1.jpg"
      description="Qu???ng dev reactjs mobile"
      url={`http://www.shoppanda.net/san-pham/`}
      title="Reactjs Developer"
      titlePage="Th??ng Tin S???n Ph???m"
    />
    <Loading />
  </>
  // hi????n thi?? info
  const {
    avatar,
    color,
    discount,
    discountContent,
    evaluate,
    like,
    name,
    price,
    promotion,
    quantity,
    questionAnswer,
    ship,
    size,
    id: productId,
    brand, descriptContent, subImage
  } = detail;
  const isEmptyObject = obj => JSON.stringify(obj) === "{}"
  const formatPrice = formatMoney(price);
  const formatDiscount = formatMoney(discount);
  const formatShip = formatMoney(ship)
  if (isEmptyObject(detail)) return <Error />;
  if (!Array.isArray(subImage)) return null
  const selectImage = subImage[index];
  const indicator = _slice(subImage, start, end);
  const handleClickChangeIndex = currentIndex => {
    setIndex(currentIndex + start);
  }
  const handleClickNext = () => {
    setIndex(index + 1);
    if (index === end - 1) {
      setStart(start + 3);
      setEnd(end + 3);

    }
  }
  const handleClickPrev = () => {
    setIndex(index - 1);
    if (index === start) {
      setStart(start - 3);
      setEnd(end - 3);
    }
  }

  const selectColor = color[currentColor];
  const selectSize = size[currentSize];
  const handleClickChangeColor = index => {
    setCurrentColor(index);
  }
  const handleClickChangeSize = index => {
    setCurrentSize(index);
  }
  const handleClickIncrement = () => {
    //   handlePostProductToPayment: data => dispatch(postProductToPaymentRequest(data))
    dispatch(handleIncrement());
  }
  const handleClickDecrement = () => {
    dispatch(handleDecrement());
  }

  let listProduct = [];
  _forEach(products, item => {
    listProduct = [...listProduct, products[Math.floor(Math.random() * products.length)]]
  });
  const uniqProduct = _uniq(listProduct);
  const product = {
    id: `${productId}`,
    name: name,
    quantity: counter,
    color: selectColor,
    size: selectSize,
    avatar: avatar,
    price: price,
    brand: brand,
    ship: ship

    // phan them thong tin vao gio hang
  }
  const body = document.querySelector("body");
  const handleClickAddToCart = () => {
    body.classList.add("hidden");
    dispatch(postProductToCartRequest(product));
  }
  const handleClickCloseCart = () => {
    dispatch(handleClickCloseMessage());
    body.classList.remove("hidden");

  }
  const handleClickPayment = () => {
    setCheckPay(true);
    body.classList.add("hidden");
  }
  const handleClickCacelPayment = () => {
    setCheckPay(false);
    body.classList.remove("hidden")
  }
  const handleChangeInput = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleClickToPayment = () => {
    if (!state.frmUser || !state.frmAddress || !state.frmTel) {
      setCheckInfo(true);
    } else {
      setCheckInfo(false)

      const Info = {
        ...product,
        user: state.frmUser,
        tel: state.frmTel,
        address: state.frmAddress
      }
      dispatch(postProductToPaymentRequest(Info))
      setCheckPay(false);
      setState({
        ...state,
        frmAddress: "",
        frmTel: "",
        frmUser: ""
      })
      body.classList.remove("hidden")


    }

  }
  const descMaxHeight = document.querySelector(".desc__max__height");
  const showMore = document.querySelector(".show-more")
  const bg = document.querySelector(".desc__bg")
  const handClickShowMore = () => {
    if (descMaxHeight && showMore && bg) {
      descMaxHeight.style.maxHeight = "max-content";
      showMore.style.display = "none";
      bg.classList.add("change__bg")
    }
  }
  const descInfo = document.querySelector(".desc-info");
  if (descInfo) {
    descInfo.innerHTML = descriptContent;
  }

  return (
    <DetailWrapper
      disabledPrev={index}
      disabledNext={index === subImage.length - 1}
      className="detail-wrapper"

    >
      <Meta
        image={`http://www.shoppanda.net${avatar}`}
        description={name}
        url={`http://www.shoppanda.net/san-pham/${productId}/`}
        title={name}
        titlePage="Th??ng Tin S???n Ph???m"
      />


      {check && <MessageCart
        productCart={productCart}
        listProduct={uniqProduct}
        history={history}
        handleClickCloseCart={handleClickCloseCart}
        counter={counter}
        id={id}
        color={colorTheme}
      />}

      {checkPayment && <MessagePay />}

      {checkPay ? <FormPayment className="form-payment">
        <div className="payment-content">
          <h3 className="title-form">
            C???ng thanh to??n
          </h3>
          <Input
            type="text"
            name="frmUser"
            value={state.frmUser}
            placeholder="H??? v?? t??n"
            onChange={handleChangeInput}
          />
          <Input
            type="text"
            name="frmTel"
            placeholder="Nh???p s??? ??i???n tho???i"
            value={state.frmTel}
            onChange={handleChangeInput}
          />

          <Input
            type="text"
            name="frmAddress"
            value={state.frmAddress}
            placeholder="Nh???p ?????a ch??? giao h??ng..."
            onChange={handleChangeInput}
          />
          {checkInfo && <ErrorPay name="M???i b???n nh???p l???i th??ng tin" />}
          <div className="btn-frm">
            <Button
              type="comeBack"
              className="btn-cancel"
              name="H???y ????n"
              onClick={handleClickCacelPayment}
            />
            <Button
              type="payment"
              className="btn-payment"
              name="Mua"
              onClick={handleClickToPayment}
            />

          </div>
        </div>
      </FormPayment> : null}
      <div className="container">
        <ProductDetailWrapper
          className="product-detail"
          color={colorTheme}
        >
          <div className="slider-images">

            <MyImage
              image={selectImage.src}
              name={selectImage.src}
            />
            <ul
              className="indicator">
              {indicator.map((item, index) => <IndicatorItem
                indicatorItem={item}
                key={item.id}
                active={selectImage.id === item.id}
                handleClickChangeIndex={
                  () => handleClickChangeIndex(index)
                }
              />)}
              <li className="slider-prev">
                <Button
                  name={<FontAwesomeIcon icon={faAngleLeft} />}
                  className={`btn-prev ${index === 0 && 'disabled'}`}
                  onClick={handleClickPrev}
                  disabled={index === 0}

                />
              </li>

              <li className="slider-next">
                <Button
                  name={<FontAwesomeIcon icon={faAngleRight} />}
                  className={`btn-next ${index === subImage.length - 1 && "disabled"}`}
                  onClick={handleClickNext}
                  disabled={index === subImage.length - 1}

                />
              </li>
            </ul>
          </div>
          <div className="select-product">
            <h3 className="name-product">
              {name}
            </h3>
            <div className="evaluate">
              <ul className="star">
                {[1, 2, 3, 4, 5].map(item => <li
                  key={item}
                  className="star-item"
                >
                  <FontAwesomeIcon icon={faStar} />
                </li>)}
                <li className="evaluate-text">
                  {evaluate} ??a??nh gia??
                </li>
              </ul>
              <span className="like">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>
            <h5 className="code-product">
              M?? s???n ph???m: <span className="code__bold">
                {brand ? brand : "kh??ng c??"}
              </span>
            </h5>

            <MyImage
              className="sale"
              image="/assets/images/product/subImage/sale.webp"
              name="sale"
            />
            <div className="price">
              <span className="price-item">
                {formatPrice} ??
              </span>
              {discount && <div className="price-discount">
                <span className="discount-item">
                  {formatDiscount} ??
                </span>
                <span className="percent-discount">
                  -{discountContent}%
                </span>
              </div>}
            </div>
            <hr />
            <table
              cellSpacing="30"
              cellPadding="30">
              <tbody>
                <tr>
                  {color.length ? <>
                    <td>Nho??m ma??u:</td>
                    <td>
                      <ul className="list-select">
                        {color.map((item, index) => <SelectItem
                          key={item.id}
                          selectItem={item.name}
                          active={selectColor.id == item.id}
                          handleClickChangeSelect={() => handleClickChangeColor(index)}
                          color={colorTheme}

                        />)}
                      </ul>
                    </td>
                  </> : ""}
                </tr>
                <tr>
                  {size.length ? <>
                    <td>Size:</td>
                    <td>
                      <ul className="list-select">
                        {size.map((item, index) => <SelectItem
                          key={item.id}
                          selectItem={item.name}
                          active={selectSize.id === item.id}
                          handleClickChangeSelect={() => handleClickChangeSize(index)}
                          color={colorTheme}
                        />)}
                      </ul>
                    </td> </> : ""}
                </tr>
                <tr>
                  <td>S???? l????ng:</td>
                  <td>
                    <Button
                      name="-"
                      type="counter"
                      className={`decrement ${counter === 1 && 'disabled'}`}
                      onClick={handleClickDecrement}
                    />
                    <span className="counter">
                      {counter}
                    </span>
                    <Button
                      name="+"
                      type="counter"
                      className={`increment ${counter === 10 && 'disabled'}`}
                      onClick={handleClickIncrement}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="buy">
              <Button
                name="MUA NGAY"
                type="buy"
                className="btn-buy"
                onClick={handleClickPayment}
              />
              <Button
                name="TH??M VA??O GIO?? HA??NG"
                type="add to cart"
                className="btn-cart"
                onClick={handleClickAddToCart}

              />
            </div>
          </div>
          <SelectDeliveryWrapper className="select-delivery">
            <div className="select-delivery-header">
              <h6 className="title-select-delivery">
                Tu??y cho??n gian ha??ng
              </h6>
              <div className="deliery-modal">
                <span className="icon-delivery">
                  <FontAwesomeIcon
                    icon={faInfoCircle} />
                </span>
                <div className="box-modal-content">
                  <h5 className="title-box">
                    Tu??y cho??n giao ha??ng
                  </h5>
                  <div className="paragraph">
                    <span className="icon">
                      <FontAwesomeIcon icon={faHandshake}
                      />
                    </span>
                    <p className="paragraph-delivery">
                      <b>GH ti??u chu???n</b>
                      :?????i v???i h??ng n???i ?????a, b???n s??? nh???n ???????c h??ng trong 2-4 ng??y l??m vi???c.
                      <br />
                      Ph?? giao h??ng s??? ???????c t??nh d???a tr??n t???ng k??ch th?????c/kh???i l?????ng s???n ph???m b???n ???? mua t??? nh?? b??n h??ng.
                    </p>
                  </div>
                  <div className="paragraph">
                    <span className="icon">
                      <FontAwesomeIcon icon={faMoneyBillWave}
                      />
                    </span>
                    <p className="paragraph-delivery">

                      <b>Thanh to??n khi nh???n h??ng. (Kh??ng ???????c ?????ng ki???m)</b>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="select-delivery-body">
              <div className="ship delivery-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faHandshake}
                  />
                </span>
                <div className="info">
                  <span>
                    Giao ha??ng ti??u chu????n
                  </span>
                  <p className="money-ship">
                    {ship ? formatShip + '??' : 'mi????n phi??'}
                  </p>
                  <span className="time-ship">
                    3 - 6 nga??y
                  </span>
                </div>
              </div>
              <div className="payment delivery-item">
                <span className="icon">
                  <FontAwesomeIcon icon={faMoneyBillWave}
                  />
                </span>
                <p className="payment-text">
                  Thanh to??n khi nh???n h??ng. (Kh??ng ???????c ?????ng ki???m)
                </p>
              </div>
              <div className="delivery-item lie">
                <span className="icon">
                  <FontAwesomeIcon icon={faHistory} />
                </span>
                <div className="lie-text">
                  7 ng??y tr??? h??ng cho Nh?? b??n h??ng
                  <p className="exception">
                    Kh??ng ???????c tr??? h??ng v???i l?? do "Kh??ng v???a ??"
                  </p>
                </div>
              </div>
              <div className="delivery-item security">
                <span className="icon">
                  <FontAwesomeIcon icon={faBan} />
                </span>
                <p className="security-text">
                  Kh??ng ??p d???ng ch??nh s??ch b???o h??nh
                </p>
              </div>

            </div>
          </SelectDeliveryWrapper>

        </ProductDetailWrapper>
        <DescriptionProductWrapper
          className="description"
          color={colorTheme}
        >
          <div className="description-product">
            <h5 className="title-descript">
              M?? ta?? sa??n ph????m {name}
            </h5>
            <p className="message">
              <span className="icon">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              S???n ph???m n??y l?? t??i s???n c?? nh??n ???????c b??n b???i Nh?? B??n H??ng C?? Nh??n v?? kh??ng thu???c ?????i t?????ng ph???i ch???u thu??? GTGT. Do ???? h??a ????n VAT kh??ng ???????c c???p trong tr?????ng h???p n??y.
            </p>
            {/* <DescriptContent descriptContent={descriptContent} /> */}
            <div className="desc__max__height desc__bg desc-info">

            </div>

            <Buttons
              type="showMore"
              className="show-more"
              name="show more"
              onClick={handClickShowMore}
            />

            {/* comment */}
            <Comment id={id} />
          </div>



        </DescriptionProductWrapper>

        <ProductInvolveWrapper color={colorTheme}>
          <h3 className="title">
            Sa??n ph????m li??n quan
          </h3>
          <div className="container-fluid">
            <div className="row">

              {_map(_slice(uniqProduct, 0, 4), item => {
                return <ProductItem
                  className="col-lg-3 col-md-4 col-sm-6 col-6"
                  key={item.id}
                  productItem={item}
                  nameButton="Xem th??ng tin"
                  history={history}
                  type="border"
                  color={colorTheme}
                />
              })}
            </div>
          </div>
        </ProductInvolveWrapper>

      </div>
    </DetailWrapper>
  );
}



Detail.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}

IndicatorItem.propTypes = {
  indicatorItem: PropTypes.object,
  active: PropTypes.bool,
  handleClickChangeIndex: PropTypes.func,
  color: PropTypes.object
}
SelectItem.propTypes = {
  selectItem: PropTypes.string,
  active: PropTypes.bool,
  handleClickChangeSelect: PropTypes.func.isRequired,
  color: PropTypes.object
}
DescriptContent.propTypes = {
  descriptContent: PropTypes.string
}
ImageProduct.prototype = {
  imageProduct: PropTypes.object
}
export default memo(Detail);
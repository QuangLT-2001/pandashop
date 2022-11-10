import React, { useEffect,memo } from "react";
import Product from "./../../";
import {  useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import {getProducts} from '../../actions';
import {
    selectProducts,
    selectIsLoading,
  } from './../../selector';
import Loading from "../../../Components/Loading";
import PropTypes from "prop-types";
import Meta from "../../../../Component/Meta";
const Clothes = props => {
    const {
        history,
     } = props;
    // xử lý mapStateToProps
    const products = useSelector(selectProducts);
    const isLoading = useSelector(selectIsLoading);
    // xử lý mapDispatchToProps;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }, []);
    const clothes = _.filter(products, item => item.tabs === "clothes");
    if(isLoading) return <>
    <Meta
        image="https://www.shoppanda.net/assets/images/product/subImage/product-1-1.webp"
        description="Các mặt hàng của Shop Panda"
        url={`https://www.shoppanda.net/#san-pham/quan-ao/`}
        title="Các mặt hàng của Shop Panda"
        titlePage="Quần Áo"
      />
    <Loading />
    </>
    return (
        <>
            <Product
            products={clothes}
            history={history}
            titlePages="Quần Áo"
            url={`https://www.shoppanda.net/#san-pham/quan-ao/`}
            />
        </>
    );
}

Clothes.propTypes = {
    history: PropTypes.object
}
export default memo(Clothes);
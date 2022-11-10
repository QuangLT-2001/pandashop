import React, { useEffect, useState, memo } from "react";
import Product from "./../../";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { getProducts } from '../../actions';
import {
    selectProducts,
    selectIsLoading,
} from './../../selector';
import Loading from "../../../Components/Loading";
import PropTypes from "prop-types";
import Meta from "../../../../Component/Meta";
const ProductAll = props => {
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
    if (isLoading) return <>
        <Meta
            image="https://www.shoppanda.net/assets/images/product/subImage/product-1-1.webp"
            description="Các mặt hàng của Shop Panda"
            url={`https://www.shoppanda.net/#san-pham/`}
            title="Các mặt hàng của Shop Panda"
            titlePage="Sản Phẩm"
        />
        <Loading />
    </>
    return (
        <>
            <Product
                titlePages="Sản Phẩm"
                products={products}
                history={history}
                url={`https://www.shoppanda.net/san-pham/`}
            />
        </>
    );
}

ProductAll.propTypes = {
    history: PropTypes.object
}
export default memo(ProductAll);
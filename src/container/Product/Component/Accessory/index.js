import React, { useEffect, memo } from "react";
import Product from "../..";
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import { getProducts } from '../../actions';
import {
    selectProducts,
    selectIsLoading,
} from './../../selector';
import Loading from "../../../Components/Loading";
import PropTypes from "prop-types";
import Meta from "../../../../Component/Meta";
const Accessory = props => {
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
    const accessory = _.filter(products, item => item.tabs === "accessory");
    if (isLoading) return <>
        <Meta
            image="https://www.shoppanda.net/assets/images/product/subImage/product-1-1.webp"
            description="Các mặt hàng của Shop Panda"
            url={`https://www.shoppanda.net/san-pham/phu-kien-khac/`}
            title="Các mặt hàng của Shop Panda"
            titlePage="Phụ Kiện Khác"
        />
        <Loading />
    </>
    return (
        <>
            <Product
                products={accessory}
                history={history}
                titlePages="Phụ Kiện Khác"
                url={`https://www.shoppanda.net/#san-pham/phu-kien-khac/`}
            />
        </>
    );
}
Accessory.propTypes = {
    history: PropTypes.object
}
export default memo(Accessory);
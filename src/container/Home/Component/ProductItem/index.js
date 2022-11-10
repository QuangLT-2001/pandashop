import React, { memo, useEffect, useState } from 'react';
import { ProductItems } from './style';
import { formatMoney } from '../../../../Component/Format';
import PropTypes from "prop-types";
import MyImage from '../../../../Component/Image';
import _slice from "lodash/slice"
import ImageItem from './Components/ImageItem';
import { useHistory } from "react-router-dom"
const ProductItem = props => {
    const {
        productItem,
        className,
        icon,
        type,
        typeHot,
        color
    } = props;
    const {
        name,
        price,
        avatar,
        discount,
        status,
        discountContent,
        id,
        brand,
        subImage, quantity
    } = productItem;
    const history = useHistory();
    const priceFormat = formatMoney(price)
    const discountFormat = formatMoney((price * discountContent) / 100);
    let [currentImage, setCurrentImage] = useState(0);
    if (!subImage.length) return null
    let selectCurrentImage = subImage[currentImage];
    if (!selectCurrentImage) return null
    const sliderImage = _slice(subImage, 0, 4)
    const body = document.querySelector("body")
    const handleClickToDetail = productId => {
        body.classList.remove("hidden")
        history.push(`/san-pham/${productId}`);


    }
    // xử lý dot
    const handleClickSelectDot = ind => {
        setCurrentImage(ind);
    }
    /*
        test demo
    */




    if (!productItem) return null
    return (
        <ProductItems
            color={color}
            discountFormat={discountFormat}
            type={type}
            typeHot={typeHot}
            discountContent={discountContent}
            discount={discount}
            className={className}
            src="/assets/images/logo/dis2.png" icon={icon}
            status={status}
        >
            <div className="product-item-content">

                {/* <img
                    onClick={() => handleClickToDetail(id)}
                    src={avatar}
                    alt={name}
                /> */}
                <MyImage
                    onClick={() => handleClickToDetail(id)}
                    image={selectCurrentImage.src}
                    name={name}
                    className="image-product"
                    width="100%"
                    height="280px"
                />

                <div className="title-product">
                    <div className='head-product'>
                        <h5 className='name-code'>
                            Mã SP:  <span>
                                {brand ? brand : "Không có"}
                            </span>
                        </h5>

                    </div>
                    <h4
                        className="name-product"
                        onClick={() => handleClickToDetail(id)}
                    >{name}</h4>
                </div>
                <div className='price-product'>
                    <span className="price">{discountContent ? discountFormat : priceFormat}</span>
                    {discountContent && <span className='discount'>
                        {priceFormat}đ
                    </span>}
                </div>
                <div className='product-bottom'>
                    {discountContent && <span className="icon-discount">
                        {discountContent} %
                    </span>}
                    <span className='quantity'>
                        SL: <b>
                            {quantity ? quantity : "hết hàng"}
                        </b>
                    </span>
                </div>
                <ul className='dot-image'>
                    {sliderImage.map((item, index) => <ImageItem
                        className={selectCurrentImage.id === item.id && "active"}
                        key={item.id}
                        imageItem={item}
                        handleClickSelectDot={() => handleClickSelectDot(index)}
                    />)}
                </ul>
            </div>
        </ProductItems>
    );
}
ProductItem.propTypes = {
    item: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    typeHot: PropTypes.string,
    color: PropTypes.object
}
export default memo(ProductItem);
import React, { memo } from "react";
import { BannerItems } from "./style";
import PropTypes from "prop-types"
import MyImage from "../../../../Component/Image";
const BannerItem = props => {
    const { item: { name } } = props;
    return (
        <BannerItems className="banner-item" item={name}>
            <MyImage
            className="image-item"
            image={name}
            name="image"
            />
        </BannerItems>
    );
}
BannerItem.propTypes = {
    item: PropTypes.object
}
export default memo(BannerItem);
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { BannerImageItems } from './style';
import PropTypes from "prop-types";
import MyImage from '../../../../Component/Image';
const BannerImageItem = ({ bannerImageItem, type }) => {
  const { name } = bannerImageItem;
  return (
    <BannerImageItems type={type}>
      <NavLink exact to="#">
        <MyImage
        image={name}
        name="banner right"
        />
      </NavLink>
    </BannerImageItems>
  );
}
BannerImageItem.propTypes = {
  bannerImageItem: PropTypes.object,
  type: PropTypes.string
}
export default memo(BannerImageItem);
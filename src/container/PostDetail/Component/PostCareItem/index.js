import React from "react";
import { PostCareItems } from "./style";
import PropTypes from "prop-types";
import MyImage from "../../../../Component/Image";
const PostCareItem = props => {
  const {
    postCareItem,
    onClick
  } = props;
  const {name, avatar, description} = postCareItem;
  return(
    <PostCareItems className="post-care-item">
     
      <MyImage
      image={avatar}
      name=""
      onClick={onClick}
      />
      <div className="info">
          <h5
          className="name-post"
          onClick={onClick}>
            {name}
          </h5>
          <p className="desc-post">
            {description[0].name}
          </p>
      </div>
    </PostCareItems>
  );
}
PostCareItem.propTypes = {
  postCareItem: PropTypes.object,
  onClick: PropTypes.func
}
export default PostCareItem;
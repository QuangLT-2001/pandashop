import React, { memo } from "react";
import { PostItems } from "./style";
import _ from 'lodash';
import moment from "moment";
import PropTypes from "prop-types"
import MyImage from "../../../../Component/Image";
const PostItem = ({
  postItem,
  className,
  onClick
}) => {
  const { name, description, avatar, createdAt } = postItem;

  return (
    <PostItems className={className}>
      <div className="post-item">

        <MyImage
          image={avatar}
          name="new"
          onClick={onClick} />
        <div className="info-post">
          <h4 className="name-post" onClick={onClick}>
            {name}
          </h4>
          <p className="descript-post" onClick={onClick}>
            {description[0].name}
          </p>
        </div>
        <span className="time">
          {moment(createdAt).format('DD/MM/YYYY')}
        </span>

      </div>

    </PostItems>
  );
}

PostItem.propTypes = {
  postItem: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
}
export default PostItem;
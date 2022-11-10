import React, { useEffect, useState, memo } from "react";
import { PostWrapper } from "./style";
import {
  getListPostRequest,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectPosts,
  selectColor,
} from "./selector"
import { NavLink } from "react-router-dom";
import PostItem from '../Home/Component/Post'
import Loading from "../Components/Loading";
import Button from "../../Component/Button";
import _map from "lodash/map"
import _slice from "lodash/slice"
import PropTypes from "prop-types";
import Meta from "../../Component/Meta";

const Post = props => {
  const {
    history,
  } = props;
  // xử lý mapStateToProps
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const color = useSelector(selectColor);
  // xử lý mapDispatchToProps;
  const dispatch = useDispatch();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  useEffect(() => {
    dispatch(getListPostRequest())
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [end]);
  if (isLoading) return <>
    <Meta
      image="http://www.shoppanda.net/assets/images/logo/logo10.png"
      description="Hãy cùng tìm hiểu các sự kiện nổi bật nhất của Shop Panda"
      url="http://www.shoppanda.net/tin-tuc"
      title="Tin Tức"
      titlePage="Tin Tức"
    />
    <Loading />
  </>
  // link toi post detail
  const handleClickToPostDetail = postId => {
    history.push(`/tin-tuc/${postId}`);
  }
  const handleClickLoadMore = () => {
    setEnd(state => state + 4)
  }

  return (
    <PostWrapper color={color}>
      <Meta
        image="http://www.shoppanda.net/assets/images/logo/logo.png"
        description="Hãy cùng tìm hiểu các sự kiện nổi bật nhất của Shop Panda"
        url="http://www.shoppanda.net/tin-tuc"
        title="Tin Tức"
        titlePage="Tin Tức"
      />
      <p className="title">
        <NavLink exact to="/" className="link-to">
          Trang chủ
        </NavLink>
        /
        <span>
          Tất cả tin tức
        </span>
      </p>
      <h3 className="title-page">
        Tất cả tin tức
      </h3>
      <div className="container">
        <div className="row">
          {_map(_slice(posts, start, end), item => {
            return <PostItem
              className="col-lg-3 col-md-4 col-sm-6"
              postItem={item}
              key={item.id}
              onClick={() => handleClickToPostDetail(item.id)}
            />
          })
          }
        </div>
        {end <= posts.length && <Button
          name="Xem thêm bài viết"
          type="add"
          color={color}
          onClick={handleClickLoadMore}
        />}
      </div>
    </PostWrapper>
  );
}

Post.propTypes = {
  handleGetListPost: PropTypes.func.isRequired,
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
  history: PropTypes.object,
  color: PropTypes.object
}
export default memo(Post);
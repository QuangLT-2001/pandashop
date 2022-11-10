import React from "react";
import {
  LeftPostDetailWrapper,
  MainPostDetailWrapper,
  PostDetailWrapper,
  RelateNewsWrapper
} from "./style";
import {
  getPostDetailRequest,
  getListPostRequest
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectPostDetail,
  selectPosts,
  selectIsLoading,
  selectColor
} from "./selector"
import Loading from "../Components/Loading";
import PostCareItem from "./Component/PostCareItem";
import _ from 'lodash';
import PostItem from "./../Home/Component/Post"
import { useParams } from "react-router-dom"
import LikeShare from "../Components/LikeShare";
import moment from "moment";
import TitlePage from "../../Component/Title";
import PropTypes from "prop-types";
import Meta from "../../Component/Meta";
import MyImage from "../../Component/Image";
const PostDetail = props => {

  const [currentRoot, setCurrentRoot] = useState("");
  const params = useParams();
  const {
    match: { params: { id } },
    history,
  } = props;
  // xử lý mapStateToProps
  const postDetail = useSelector(selectPostDetail);
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const color = useSelector(selectColor)
  // xử lý mapDispatchToProps;
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentRoot(params.id);
    dispatch(getPostDetailRequest(+id));
    dispatch(getListPostRequest());
  }, [params]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  if (isLoading) return <>
    <Meta
      image="http://www.shoppanda.net/assets/images/banner/1.jpg"
      description="Quảng dev reactjs mobile"
      url={`http://www.shoppanda.net/tin-tuc/`}
      title="Reactjs Developer"
      titlePage="Thông Tin Bài Viết"
    />
    <Loading />
  </>
  if (!postDetail || !posts) return null;
  const {
    avatar,
    createdAt,
    description,
    name,
    subImage,
    id: idPost,

  } = postDetail;
  let listPost = [];
  _.forEach(posts, item => {
    listPost = [...listPost, posts[Math.floor(Math.random() * posts.length)]]
  })
  const uniqPost = _.uniqBy(listPost, "id");
  if (!uniqPost) return null
  const handleClickToPostDetail = postId => {
    history.push(`/tin-tuc/${postId}`);
  }
  let relatePost = [];
  _.forEach(posts, item => {
    relatePost = [...relatePost, posts[Math.floor(Math.random() * posts.length)]]
  })
  const time = moment(createdAt).format('DD/MM/YYYY')
  return (
    <PostDetailWrapper className="post-detail">
      <Meta
        image={`http://www.shoppanda.net${avatar}`}
        description={name}
        url={`http://www.shoppanda.net/tin-tuc/${idPost}/`}
        title={name}
        titlePage="Thông Tin Bài Viết"
      />
      <div className="container">
        <MainPostDetailWrapper className="main-post-detail">
          <MyImage
            image={avatar}
            name=""
          />
          <h3 className="name-post">
            {name}
          </h3>
          <p className="time">
            <span>Shoppanda</span>
            <span className="time-item">
              {createdAt && time}
            </span>
          </p>
          <LikeShare id={idPost} />
          {description && description.map(item => {
            const { name, desc, type, id } = item;
            return (
              !type ? <p className="descript" key={id}>
                {name}
              </p> :
                (type === "heading" ?
                  <h5
                    className="indexing"
                    key={id}
                  >
                    {name}
                  </h5> :
                  <div
                    className="image-post"
                    key={id}
                  >
                    <MyImage
                      image={name}
                      name=""
                    />
                    <p className="desc-image">
                      {desc}
                    </p>
                  </div>)
            );
          })}
        </MainPostDetailWrapper>
        <LeftPostDetailWrapper
          className="left-post-detail"
          color={color}
        >
          <h3 className="title">
            có thể bạn quan tâm
          </h3>
          <div className="list-post-care">
            {uniqPost.map(item => {
              return <PostCareItem
                onClick={() => handleClickToPostDetail(+item.id)}
                postCareItem={item}
                key={item.id} />
            })}
          </div>
          {subImage.map(item => {
            return <MyImage
              image={item.src}
              name=""
              key={item.id}
            />
          })}
        </LeftPostDetailWrapper>
        <RelateNewsWrapper className="relate-news">
          <h3 className="title">
            Bài viết liên quan
          </h3>
          <div className="row">
            {_.map(_.slice(_.uniqBy(relatePost, 'id'), 0, 4), item => {
              return <PostItem
                className="col-lg-3 col-md-6 col-sm-12 col-12"
                postItem={item}
                key={item.id}
                onClick={() => handleClickToPostDetail(item.id)}
              />
            })}
          </div>
        </RelateNewsWrapper>
      </div>
    </PostDetailWrapper>
  );
}

PostDetail.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}
export default PostDetail;
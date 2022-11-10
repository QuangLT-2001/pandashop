import React from "react";
import { useEffect } from "react";
import { CommentFBWrapper } from "./style";
import PropTypes from "prop-types";

const Comment = ({id}) => {
     const initFacebookSDK = () => {
          if (window.FB) {
            window.FB.XFBML.parse();
          }
          window.fbAsyncInit = function () {
            if(!window.FB) return null;
            window.FB.init({
              addId: process.env.REACT_APP_FACEBOOK_APP_ID,
              cookie: true,
              xfbml: true,
              version: 'v2.5'
            })
          }
            (function (d, s, id) {
              let js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(s)) return;
              js = d.createElement(s); js.id = id
              js.src = "//connect.facebook.net/vi_VN/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          }
          useEffect(() => {
               initFacebookSDK();
          }, [])
     return (
          <CommentFBWrapper>
               <div
               className="fb-comments"
               data-href={`http://www.shoppanda.net/san-pham/${id}`}
               data-width="100%"
               data-numposts="3"></div>
          </CommentFBWrapper>
     );
}
Comment.propTypes = {
  id: PropTypes.string.isRequired
}
export default Comment;
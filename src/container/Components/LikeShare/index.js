import React, {useEffect} from 'react';
import { LikeShareWrapper } from './style';
import PropTypes from "prop-types";

const LikeShare = ({id}) => {
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
     return(
          <LikeShareWrapper className="like-share">
               <div
               className="fb-like"
               data-href={`http://www.shoppanda.net/tin-tuc/${id}`}
               data-width=""
               data-layout="standard"
               data-action="like"
               data-size="small"
               data-share="true"></div>
          </LikeShareWrapper>
     );
}

LikeShare.propTypes = {
  id: PropTypes.string.isRequired
}

export default LikeShare;
import React from "react";
import {
    FooterWrapper,
    FooterItems,
    SocialItems
} from "./style";
import { TitleFooter } from "./Component/TitleFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkedAlt,
    faPhoneVolume,
    faEnvelopeOpenText,
    faRss
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faPinterest
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const ContentItem = props => {
    const { item } = props;
    return <FooterItems className="content-item">
        {item.icon}
        {item.name}
    </FooterItems>
}
export const SocialItem = props => {
    const { item } = props;
    return (
        <SocialItems className="social-item" bg={item.type}>
            <NavLink exact to="#">
                {item.icon}
            </NavLink>
        </SocialItems>
    );
}
export const socialFooter = [
    {
        type: '#3a589d',
        icon: <FontAwesomeIcon icon={faFacebookF} />
    },
    {
        type: '#3b6994',
        icon: <FontAwesomeIcon icon={faInstagram} />
    },
    {
        type: '#2478ba',
        icon: <FontAwesomeIcon icon={faTwitter} />
    },
    {
        type: '#cb2320 ',
        icon: <FontAwesomeIcon icon={faPinterest} />
    },
    {
        type: '#fc7600',
        icon: <FontAwesomeIcon icon={faRss} />
    }
]
const Footer = props => {
    const mainFooter = [
        {
            icon: <FontAwesomeIcon icon={faMapMarkedAlt} />,
            name: 'Thôn 3 Vạn Phúc Thanh Trì Hà Nội'
        },
        {
            icon: <FontAwesomeIcon icon={faPhoneVolume} />,
            name: '039.2272.154'
        },
        {
            icon: <FontAwesomeIcon icon={faEnvelopeOpenText} />,
            name: 'quangnvfrontend@gmail.com'
        },
    ]

    return (
        <FooterWrapper className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-item-left col-lg-4 col-md-6">
                        <TitleFooter name="Giới thiệu" className="title-footer" />
                        <p className="descript-footer">
                            Chào mừng quý khách đến với cửa hàng của chúng tôi!
                            Tại đây, chúng tôi đảm bảo quý khách sẽ chọn được những
                            mặt hàng ưng ý nhất, phù hợp nhất. Chúng tôi chúc quý
                            khách sẽ chọn được những mặt hàng phù hợp nhất, ưng ý nhất!

                        </p>
                    </div>
                    <div className="footer-item-main col-lg-4 col-md-6">
                        <TitleFooter name="Địa chỉ" className="title-footer" />
                        <ul className="list-footer-content">
                            {mainFooter.map((item, index) => {
                                return <ContentItem item={item} key={index} />
                            })}
                        </ul>
                    </div>
                    <div className="footer-item-right col-lg-4 col-md-6">
                        <TitleFooter name="Mạng xã hội" className="title-footer" />
                        <ul className="list-social">
                            {socialFooter.map((item, index) => {
                                return <SocialItem item={item} key={index} />
                            })}
                        </ul>
                    </div>
                    <div className="footer-item-bottom col-lg-12">
                        <TitleFooter name="Bản đồ" className="title-footer" />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7454.165417485502!2d105.88206767463623!3d20.908991844253244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b1fd22ff264b%3A0xd96dafd7349e8f89!2zTmluaCBYw6EsIFbhuqFuIFBow7pjLCBUaGFuaCBUcsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1642930342649!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="content">
                    © Bản quyền thuộc về "Quảng Dev"
                </p>
            </div>
        </FooterWrapper>
    );
}

ContentItem.propTypes = {
    item: PropTypes.object
}
SocialItem.propTypes = {
    item: PropTypes.object
}
export default Footer;
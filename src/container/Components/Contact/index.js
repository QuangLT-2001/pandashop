import React, { useEffect, useState } from "react";
import { ContactWrapper } from "./style";
import { NavLink } from "react-router-dom";
import Loading from "../Loading";
import Meta from "../../../Component/Meta";
const Contact = props => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, []);
  if (isLoading) return <>
    <Meta
      image="http://www.shoppanda.net/assets/images/logo/logo.png"
      description='Panda chuyên bán quần áo trẻ trung, lịch lãm online với hàng ngàn mẫu mã để quý khách lựa chọn cho bé yêu của bạn. Hãy đặt hàng online để được hưởng nhiều ưu đãi hơn tại siêu thị Panda. Chọn mua ngay các mẫu quần áo mới nhất trong danh mục "Hàng mới nhất"'
      url={`http://www.shoppanda.net/lien-he/`}
      title="Cách liên hệ tới Shop Panda"
      titlePage="Liên Hệ"
    />
    <Loading />
  </>
  return (
    <ContactWrapper className="contact">

      <Meta
        image="http://www.shoppanda.net/assets/images/logo/logo.png"
        description='Panda chuyên bán quần áo trẻ trung, lịch lãm online với hàng ngàn mẫu mã để quý khách lựa chọn cho bé yêu của bạn. Hãy đặt hàng online để được hưởng nhiều ưu đãi hơn tại siêu thị Panda. Chọn mua ngay các mẫu quần áo mới nhất trong danh mục "Hàng mới nhất"'
        url={`http://www.shoppanda.net/lien-he/`}
        title="Cách liên hệ tới Shop Panda"
        titlePage="Liên Hệ"
      />
      <div className="container">
        <div className="header-page">
          <NavLink
            className="link-to"
            exact
            to="/"
          >
            Trang chủ
          </NavLink>
          <span>/</span>
          <span>Liên hệ</span>
        </div>
        <h2 className="title-contact">
          Liên Hệ
        </h2>
        <h3 className="name-brand">
          PANDA - thời trang giới trẻ
        </h3>
        <p>
          Panda chuyên bán quần áo trẻ trung, lịch lãm online với hàng ngàn mẫu mã để quý khách lựa chọn cho bé yêu của bạn.
          Hãy đặt hàng online để được hưởng nhiều ưu đãi hơn tại siêu thị Panda.
          Chọn mua ngay các mẫu quần áo  mới nhất trong danh mục "Hàng mới nhất"
        </p>
        <h3 className="name-info">
          Thông tin liên hệ nhanh
        </h3>
        <p>
          Hotline:  037.6326.810 | 039.2272.154
        </p>
        <p>
          Zalo:  039.2272.154
        </p>
        <p>
          FB: <a
            href="https://www.facebook.com/profile.php?id=100038260591228"
          >
            https://www.facebook.com
          </a>
        </p>
        <p>
          Youtube:
          <a
            href="https://www.youtube.com/channel/UCq4CgoNLMHFo_8EopsMcgWA"
          >
            https://www.youtube.com
          </a>
        </p>

        <iframe width={`100%`} height={315} src="https://www.youtube.com/embed/pySR0NJ0uR4?rel=0&autoplay=1" />
      </div>
    </ContactWrapper>
  );
}
export default Contact;
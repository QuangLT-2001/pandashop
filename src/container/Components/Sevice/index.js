import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ServiceWrapper, ServiceItems } from "./style";
import { data } from "./data";
import PropTypes from "prop-types";
import Meta from "../../../Component/Meta";
import Loading from "../Loading";
const ServiceItem = ({ serviceItem }) => {
  const { name, subInfo } = serviceItem;
  return (
    <ServiceItems>
      <h6 className="name-service">
        {name}

      </h6>
      <ul>
        {subInfo.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </ServiceItems>
  );

}
const Service = props => {
  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setService(data);
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  if (isLoading) return <>
    <Meta
      image="http://www.shoppanda.net/assets/images/banner/banner2.jpg"
      description='Bán buôn, bán sỉ thời trang phái trẻ tại Shop Panda
        Với nguồn hàng ổn định. độc đáo, hàng về hàng tháng với số lượng lớn và hàng trăm mẫu mã mới ko đụng hàng trên thị trường.'
      url={`http://www.shoppanda.net/dich-vu/`}
      title="Dịch vụ SHOPPANDA"
      titlePage="Dịch Vụ"
    />
    <Loading />
  </>
  return (
    <ServiceWrapper className="service">

      <Meta
        image="http://www.shoppanda.net/assets/images/banner/banner2.jpg"
        description="Bán buôn, bán sỉ thời trang phái trẻ tại Shop Panda
        Với nguồn hàng ổn định. độc đáo, hàng về hàng tháng với số lượng lớn và hàng trăm mẫu mã mới ko đụng hàng trên thị trường."
        url={`http://www.shoppanda.net/dich-vu/`}
        title="Dịch vụ SHOPPANDA"
        titlePage="Dịch Vụ"
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
          <span>Các dịch vụ của ShopPanda</span>
        </div>
        <h2 className="title-service">
          Dịch vụ SHOPPANDA
        </h2>
        <p>
          Bán buôn, bán sỉ thời trang phái trẻ tại Shop Panda
        </p>
        <p>
          Với nguồn hàng ổn định. độc đáo, hàng về hàng tháng với số lượng lớn và hàng trăm mẫu mã mới ko đụng hàng trên thị trường.
        </p>
        <p>
          Các dòng hàng ổn định bao gồm:
        </p>
        <ul>
          {service.map(item => {
            return <ServiceItem serviceItem={item} key={item.id} />
          })}
        </ul>
      </div>
    </ServiceWrapper>
  );
}

ServiceItem.propTypes = {
  serviceItem: PropTypes.object
}

export default Service;
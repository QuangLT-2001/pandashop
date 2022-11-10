import styled, { keyframes } from "styled-components";
const animateText = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
const scale = keyframes`
  from {
    transform: translate(-50%, -50%) scale(.8);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;
export const HomeWrapper = styled.section`
  padding-bottom: 2.5rem;
  .body-wrapper {
    width: 100%;
    padding: 1rem 0;
    @media (max-width: 992px) {
      padding: 0;
      margin: 0 !important;
    }
    & > .container {
      display: flex;
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
  }
`;
export const BannerWrapper = styled.section`
  width: 100%;
  border: 2px dashed #ccc;
  padding: 1rem;
  .lazy-image {
    width: 100%;
    height: 100%;
    & > .lazy-load-image-background {
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .container,  .slick-slider {
    height: 100%;
    @media (max-width: 768px) {
    padding: 0;
  }
    .slick-list, .slick-track {
    height: 100%;
    .slider-item {
      height: 100%;
      position: absolute;
    }
  }
  }
  .slick-next,.slick-prev {
    top: 50%;
  }

`;
export const ListProductWrapper = styled.section`
  .empty {
    font-size: 2rem;
    text-align: center;
    padding: 3rem 0;
  }
  .product.tabs,
  .product.accessory {
    @media (max-width: 992px) {
      width: 100vw;
      padding: 0.25rem 1rem;
    }
  }
  .product {
    .more {
      margin: 2.5rem auto;
      display: block;
      text-transform: uppercase;
    }
  }
  .accessory {
    .product-item {
      @media (max-width: 768px) {
        width: 70%;
        margin: 1rem auto;
      }
      @media (max-width: 380px) {
        width: 90%;
      }
    }
  }
  .discount {
    @media (max-width: 992px) {
      width: 100vw;
    }
  }
`;
export const TabItems = styled.li`
  color: #000;
  transition: 0.3s;
  padding: 0.85rem 0.55rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.85rem;
  @media (max-width: 1200px) {
    padding: 0.85rem 0.45rem;
  }
  &.active-tab {
    color: ${(props) => props.color.name};
  }
  &:not(:first-child) {
    @media (max-width: 992px) {
      display: ${(props) => (props.status === true ? "none" : "flex")};
    }
    &:before {
      content: "\f18c";
      font-family: Fontawesome;
      margin-right: 1rem;
    }
  }
`;


export const MainWrapper = styled.div`
  width: 100%;
  margin: 1rem 0.75rem;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    margin: 1rem 0;
  }

  .product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .slider-product {
      margin-right: 0.35rem;
      margin-top: 0.45rem;
      width: 40%;
      border: 1px solid #cacaca;
      @media (max-width: 1200px) {
        width: 100%;
      }
      .slick-next,
      .slick-prev {
        top: 50% !important;
        display: none;
        &:before {
          color: ${(props) => props.color.name};
        }
      }
    }
    .list-product {
      width: 58%;
      @media (max-width: 1200px) {
        margin: 0.75rem 0;
        width: 100%;
      }
      & > .row {
        justify-content: space-between;
      }
      .btn-to {
        background: ${(props) => props.color.name};
        padding: 0.25rem;
        margin: 0.45rem 0.15rem;
        transition: all 0.3s linear;
        position: relative;
        & > button {
          padding: 2.1rem 0;
          border: 2px solid #fff;
          width: 100%;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: #fff;
        }

        &:after {
          width: 100%;
          height: 5px;
          position: absolute;
          top: 100%;
          left: 0;
          content: "";
          background-image: url("/assets/images/logo/cong/dd4d2d.png");
        }
      }
    }
  }
`;

export const SellingProduct = styled.div`
  border: 1px solid #cacaca;
  @media (max-width: 992px) {
    display: none;
  }
  & > .title {
    padding: 0.85rem 0;
    text-transform: uppercase;
    font-size: 1.4rem;
    text-align: center;
    background: ${(props) => props.color.name};
    color: #fff;
    position: relative;
    transition: 0.3s;
    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }
    &:after {
      width: 100%;
      height: 5px;
      content: "";
      position: absolute;
      top: 98%;
      left: 0;
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
      background-position: center center;
      background-repeat: repeat;
    }
  }
  .slick-prev,
  .slick-next {
    display: none !important;
    top: 50% !important;
  }
`;
export const HotlineWrapper = styled.div`
  width: 100%;
  padding: 0.85rem;
  margin: 1rem 0;
  background: ${(props) => props.color.name};
  position: relative;
  &:after {
    width: 100%;
    height: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    background-image: url("/assets/images/logo/cong/dd4d2d.png");
    background-position: center center;
    background-repeat: repeat;
  }
  .hotline-content {
    padding: 3rem 0;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    & > .title {
      text-transform: uppercase;
      padding: 1rem;
      border-bottom: 2px solid #fff;
    }
    & > .phone {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
export const ProductTabWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  .header-tab {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: .75rem 0;
    margin: 0.25rem 0 1rem;
    @media (max-width: 398px) {
      flex-direction: column;
      padding: 1rem 0;
    }
    &:after {
      content: "";
      width: 100%;
      height: 5px;
      position: absolute;
      top: 100%;
      left: 0;
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
    }
    & > .title-body {
      width: fit-content;
      position: relative;
      font-size: 1.2rem;
      margin: 0;
      & > div {
        width: 100%;
      }
      @media (max-width: 1200px) {
        font-size: 1rem;
      }
      &:after {
        display: none;
      }
    }
    .list-tab {
      display: flex;
      margin: 0 !important;
      padding: 0;
      margin-bottom: 1rem;
      @media (max-width: 992px) {
        display: none;
      }

      .icon-tab {
        width: 40px;
        height: 40px;
        overflow: hidden;
        display: none;
        justify-content: center;
        align-items: center;
        @media (max-width: 992px) {
          display: flex;
        }
        .icon-tab-item {
          width: 80%;
          height: 2px;
          background: #000;
          display: block;
          border-radius: 10rem;
          position: relative;
          transform: ${(props) =>
    props.status === true ? "translate(0,0)" : "translate(-50px, 0)"};
          transition: 0.35s;
          cursor: pointer;
          &:after,
          &:before {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #000;
            content: "";
            transition: 0.35s;
          }
          &:after {
            transform: ${(props) =>
    props.status === true
      ? "translate(0,-10px)"
      : "translate(50px, 0px) rotate(-45deg)"};
          }
          &:before {
            transform: ${(props) =>
    props.status === true
      ? "translate(0,10px)"
      : "translate(50px, 0px) rotate(45deg)"};
          }
        }
      }
    }
    /* mobile */
    .select-wrapper {
      display: none;
      @media (max-width: 992px) {
        display: flex;
        width: auto;
      }
    }
  }
  .list-product-tabs {
    @media (max-width: 992px) {
      padding: 0.25rem 1rem;
    }
    .more {
      margin: 2.5rem auto;
      display: block;
      text-transform: uppercase;
    }
  }
  .banner-intro {
    width: 100%;
    background: #000;
    background-image: url("/assets/images/banner/banner2.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem 0.25rem;
    position: relative;
    cursor: pointer;
    @media (max-width: 1200px) {
      display: none;
    }
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
      width: 100%;
      height: 100%;
    }
    .intro {
      width: 90%;
      animation: ${animateText} 5s ease-in infinite alternate-reverse;
      transform-origin: top left;
      overflow: hidden;
      text-align: center;
      margin: auto;
      & > p {
        position: relative;
        margin: 0 auto;
        font-size: 2rem;
        text-align: center;
        font-weight: 900;
        color: #fff;
        z-index: 3;
        overflow: hidden;
        width: max-content;
        & > span {
          color: #ee4d2d;
        }
      }
    }
    & > img {
      width: 30%;
      margin: 1rem auto;
      position: relative;
      z-index: 3;
      display: block;
    }
  }
`;
export const BannerIntroMobileWrapper = styled.section`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
  .banner-intro {
    width: 100%;
    background: #000;
    background-image: url("/assets/images/banner/banner2.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem 0.25rem;
    position: relative;
    cursor: pointer;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
      width: 100%;
      height: 100%;
    }
    .intro {
      width: 90%;
      height: max-content;
      animation: ${animateText} 5s ease-in infinite alternate-reverse;
      transform-origin: top left;
      overflow: hidden;
      text-align: center;
      margin: auto;
      & > p {
        height: max-content;
        position: relative;
        margin: 0 auto;
        font-size: 2rem;
        text-align: center;
        font-weight: 900;
        color: #fff;
        z-index: 3;
        overflow: hidden;
        width: max-content;
        & > span {
          color: #ee4d2d;
        }
      }
    }
    & > img {
      width: 30%;
      margin: 1rem auto;
      position: relative;
      z-index: 3;
      display: block;
    }
  }
`;
export const PolicyWrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-image: url("/assets/images/banner/banner4.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  &:after {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }
  & > .container {
    position: relative;
    z-index: 2;
    color: #fff;
    .title-body {
      font-size: 1.8rem;
      margin: 2.5rem 0.15rem;
    }
  }
`;
export const CareWrapper = styled.section`
  padding: 3rem 0;
  & > .container {
    .title-body {
      color: ${(props) => props.color.name};
      margin: 1rem 0.25rem;
      position: relative;
      padding: 1rem;
      &:before {
        content: "\f18c";
        font-family: Fontawesome;
        margin-right: 1rem;
      }
      &:after {
        content: "";
        width: 100%;
        height: 5px;
        position: absolute;
        top: 100%;
        left: 0;
        background-image: url("/assets/images/logo/cong/dd4d2d.png");
      }
    }
    .descript-care {
      margin: 1rem 0;
    }
  }
`;
export const PostWrapper = styled.section`
  & .container {
    .title-body {
      color: ${(props) => props.color.name};
      margin: 1rem 0.25rem;
      position: relative;
      padding: 1rem;
      &:before {
        content: "\f18c";
        font-family: Fontawesome;
        margin-right: 1rem;
      }
      &:after {
        content: "";
        width: 100%;
        height: 5px;
        position: absolute;
        top: 100%;
        left: 0;
        background-image: url("/assets/images/logo/cong/dd4d2d.png");
      }
    }
    .descript-post {
      margin: 1rem 0;
    }
    & > button:hover {
      background: ${(props) => props.color.name};
    }
  }
`;

export const AdvertisementWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 101;
  .banner-content {
    width: fit-content;
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s linear;
    animation: ${scale} 1.5s ease-in-out forwards;
    @media (max-width: 992px) {
      width: 35%;
    }
    @media (max-width: 768px) {
      width: 40%;
    }
    @media (max-width: 576px) {
      width: 45%;
    }
    @media (max-width: 490px) {
      width: 50%;
    }
    @media (max-width: 430px) {
      width: 55%;
    }
    & > .lazy-load-image-background {
      width: 65%;
      cursor: pointer;
      display: block !important;
      margin: 0 auto;
      @media (max-width: 460px) {
        width: 70%;
      }
      & > img {
        width: 100%;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin: 0 auto;
        display: block;
      }
    }
    & > .icon-close {
      position: absolute;
      top: 0;
      right: 0%;
      margin-right: -4rem;
      color: #fff;
      font-size: 3rem;
      transition: 0.3s;
      display: block;
      cursor: pointer;

    }
  }
`;
export const DonorWrapper = styled.section`

`
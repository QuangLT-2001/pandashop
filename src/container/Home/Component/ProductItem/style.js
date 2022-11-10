import styled from "styled-components";

const setWidthMobileProd = (hot, prod) => {
  switch ((hot, prod)) {
    case true:
      return "%50%";
    default:
  }
};
export const ProductItems = styled.div`
  transition: 0.3s;
  position: relative;
  z-index: 4;
  padding: .5rem;
  &:nth-child(3),
  &:nth-child(4) {
    display: ${(props) => props.typeHot && "none"};
    @media (max-width: 1200px) {
      display: block;
    }
  }
  &:nth-child(4) {
    @media (max-width: 1200px) {
      display: ${(props) => props.typeHot && "none"};
    }
    @media (max-width: 992px) {
      display: block;
    }
  }
  @media (max-width: 575px) {
    /* width: ${(props) => (props.typeHot ? "50%" : "100%")}; */
    margin: 0.35rem auto;
    width: ${(props) => setWidthMobileProd(props.typeHot, props.typeProd)};
  }
  @media (max-width: 460px) {
    width: 80%;
  }
  @media (max-width: 430px) {
    width: 80%;
  }
  @media (max-width: 378px) {
    width: 90%;
    margin: auto;
  }
  .product-item-content {

    padding: .5rem;
    line-height: 1.5;
      .lazy-load-image-background {
      background: rgb(215,219,219);
      background: linear-gradient(341deg, rgba(215,219,219,1) 0%, rgba(224,223,226,1) 99%);
      overflow: hidden;
      width: 100%;
      & > img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      transition: all .3s linear !important;
      transform: scale(1);
      cursor: pointer;
      overflow: hidden;
      &:hover {
        transform: scale(1.1);
      }
    }
    }
    .title-product {
      min-height: 46px;
      overflow: hidden;
      .head-product {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin:  1rem 0;
        min-height: 45px;
        @media (max-width: 992px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .name-code {
        font-size: 1rem;
        margin-bottom: 0;
        & > span {
          color: #ddd;
          transition: all .3s linear;
          cursor: pointer;
          text-transform: lowercase;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      }

      .name-product {
        max-width: 100%;
        font-size: 1rem;
        font-weight: 500;
        color: #434e5e;
        min-height: 40px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }
      .price-product {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
          .price {
            color: ${props => props.color.name};
            position: relative;
            font-size: 1rem;
            &:after {
              content: "đ";
              text-decoration: underline;
            }
          }
          .discount {
            color: #ddd;
            text-decoration: line-through;
          }
      }
      .icon-discount {
            padding: .3rem;
            border-radius: 5px;
            color: #fff;
            background: ${props => props.color.name};
            display: inline-block;
            margin: 1rem 0;
          }
      .dot-image {
        display: flex;
        /* flex-wrap: wrap; */
        width: 100%;
        margin: 1rem 0;
      }


    }
    .btn-detail {
      display: block;
      width: 100%;
      padding: 1.1rem 0;
      margin: 1rem 0;
      text-transform: uppercase;
      background: rgb(238 77 45 / 80%);
      color: #fff;
      transition: 0.3s;
      &:hover {
        background: rgb(238 77 45 / 100%);
      }
    }
    .status-cart {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.5rem;
      .status {
        color: ${(props) => (props.status === true ? "#6efc54" : "#0074da")};
        font-weight: 700;
        font-size: 1.2rem;
        position: relative;
        &:before {
          font-family: "Fontawesome";
          content: "${(props) => (props.status === true ? "\f00c" : "\f2a0")}";
          font-size: 1rem;
          margin-right: 0.3rem;
        }
      }
      .cart {
        color: #ee4d2d;
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
    .product-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }


`

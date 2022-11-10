import styled, { keyframes } from "styled-components";
const scale = keyframes`
  from {
    transform: scale(.9);
  }
  to {
    transform: scale(1);
  }
`;
export const DetailWrapper = styled.section`
  width: 100%;
  & > .container {
    background: #fff;
    margin: 0.55rem auto;
    overflow: hidden;
  }
`;
export const ProductDetailWrapper = styled.section`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .slider-images,
  .select-delivery {
    width: 25%;
    padding: 1.2rem 1rem;
  }
  .slider-images,
  .select-delivery {
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  .select-product {
    flex: 1;
    padding: 1.2rem 1rem;
    @media (max-width: 992px) {
      width: 100%;
      flex: auto;
    }
    .name-product {
      font-size: 1.5rem;
      color: #212121;
    }
    .evaluate {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .star {
        display: flex;
        align-items: center;
        .star-item {
          color: #ffd200;
          margin: 0 0.15rem;
        }
        .evaluate-text {
          color: #1a9cb7;
          cursor: pointer;
        }
      }
      .like {
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
    .code-product {
      font-size: 0.9rem;
      .code__bold {
        color: #1a9cb7;
        cursor: pointer;
        text-transform: uppercase;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .sale {
      width: 100%;
      margin: 0.85rem 0;
    }
    .price {
      .price-item {
        font-size: 2rem;
        color: ${(props) => props.color.name};
        font-weight: 450;
      }
      .price-discount {
        font-size: 1.2rem;
        .discount-item {
          text-decoration: line-through;
          color: #cacaca;
          margin-right: 0.75rem;
        }
      }
    }
    & > table {
      width: 100%;

      tbody tr {
        td {
          &:first-child {
            min-width: 100px;
          }
          &:last-child {
            display: flex;
            align-items: center;
            .increment,
            .decrement,
            .counter {
              width: 30px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.2rem;
              padding: 0.25rem 0.55rem;
              color: #fff;
              &.counter {
                color: #000;
              }
              &.disabled {
                cursor: no-drop;
                background: rgb(128 128 128 / 20%);
              }
              &.decrement {
                margin-left: 0.55rem;
              }
            }
          }
          .list-select {
            display: flex;
            align-items: center;
            margin: 0;
            flex-wrap: wrap;
          }
        }
      }
    }
    .buy {
      width: 100%;
      display: flex;
      @media (max-width: 992px) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 99999999;
      }
      & > .btn-cart {
        @media (max-width: 992px) {
          background: rgb(245 114 36 / 100%);
          margin: 0;
          border-radius: 0;
        }
        @media (max-width: 378px) {
          font-size: 0.9rem;
        }
        @media (max-width: 320px) {
          font-size: 0.8rem;
        }
      }
      & > .btn-buy {
        @media (max-width: 992px) {
          background: rgb(255 185 22 / 100%);
          margin: 0;
          border-radius: 0;
        }
        @media (max-width: 378px) {
          font-size: 0.9rem;
        }
        @media (max-width: 320px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .slider-images {
    & > span {
      width: 100%;
      display: inline-block;
      & > img {
        width: 100%;
        max-height: 350px;
        cursor: pointer;
        object-fit: cover;
        transform: scale(0.9);
        transition: all 0.3s linear !important;
        &:hover {
          transform: scale(1);
        }
      }
    }
    .indicator {
      display: flex;
      flex-wrap: wrap;
      padding: 2rem 1rem !important;
      margin: 0;
      border-top: 1px solid #cacaca;
      position: relative;
      @media (max-width: 992px) {
        justify-content: center;
      }
      .slider-next,
      .slider-prev {
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        cursor: pointer;
        .btn-next,
        .btn-prev {
          font-size: 2rem;
          padding: 0;
          color: ${(props) => props.color.name};
          &.disabled {
            cursor: no-drop;
            color: rgb(238 77 45 / 20%);
          }
        }
      }
      .slider-next {
        right: 0;
      }
      .slider-prev {
        left: 0;
      }
    }
  }
`;
export const IndicatorItems = styled.li`
  width: 70px;
  height: 70px;
  margin: 0.45rem 0.5rem .45rem 0;
  border: 1px solid #ddd;
  cursor: pointer;
  &.active {
    border: 3px solid #000;
  }
  .lazy-image {
    height: 100%;
  }
  & > span {
    width: 100%;
    height: 100% !important;
    display: inline-block;
    & > img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }
`;
export const SelectItems = styled.li`
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #cacaca;
  margin: 0.45rem 0.55rem;
  &:hover {
    border: 1px solid ${(props) => props.color.name};
    color: ${(props) => props.color.name};
  }
  &.active {
    color: ${(props) => props.color.name};
    border-color: ${(props) => props.color.name};
  }
`;
export const SelectDeliveryWrapper = styled.div`
  .select-delivery-header {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0.55rem 0.25rem;
    .deliery-modal {
      .icon-delivery {
        color: #b0adad;
        cursor: pointer;
      }
      .icon-delivery:hover ~ .box-modal-content {
        opacity: 1;
        visibility: visible;
      }

      .box-modal-content {
        transition: 0.3s;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        width: 200%;
        top: 100%;
        right: 0;
        background: #fff;
        border-radius: 5px;
        box-shadow: 1px 2px 14px #ccc;
        padding: 1.2rem 1rem;
        @media (max-width: 992px) {
          width: 100%;
        }
        .paragraph {
          display: flex;
          .icon {
            margin-right: 0.45rem;
            font-size: 1.2rem;
            color: #b0adad;
          }
        }
      }
    }
  }
  .select-delivery-body {
    width: 100%;
    font-size: 0.9rem;
    .delivery-item {
      width: 100%;
      display: flex;
      align-items: flex-start;
      padding: 0.75rem 0;
      border-bottom: 1px solid #cacaca;
      & > .icon {
        font-size: 1.2rem;
        margin-right: 0.45rem;
      }
      & > .info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > p {
          margin: 0;
        }
        .money-ship {
          font-weight: bold;
        }
        .time-ship {
          display: block;
          width: 100%;
          color: #9e9e9e;
          font-size: 0.8rem;
        }
      }
      .lie-text {
        display: flex;
        flex-direction: column;
        .exception {
          color: #9e9e9e;
          font-size: 0.8rem;
        }
      }
      &.qr {
        justify-content: center;
        flex-wrap: wrap;
        .code-qr {
          width: 60%;
          margin: 0.75rem 0;
          transition: 0.3s;
          @media (max-width: 992px) {
            width: 30%;
          }
          @media (max-width: 486px) {
            width: 40%;
          }
          @media (max-width: 386px) {
            width: 50%;
          }
          @media (max-width: 326px) {
            width: 60%;
          }
        }
        .qr-text {
          .icon {
            margin-right: 0.35rem;
          }
          width: 100%;
          text-align: left;
        }
      }
    }
  }
`;

export const DescriptionProductWrapper = styled.section`
  width: 100%;
  margin: 1rem 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }

  .description-product {
    width: 100%;
    padding: 1rem 0.75rem;
    transition: 0.3s;
    .desc__max__height {
      max-height: 500px;
      margin: 1rem auto;
      transition: all .3s linear;
      img, iframe {
        display: block;
        margin: 1rem auto;
      }
      &.desc__bg {
        mask-image: linear-gradient(#fff, rgba(255, 255, 255, 0.2));
        &.change__bg {
          mask-image: none
        }
      }
      & > span {
      width: 100%;
      display: block !important;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin: 2rem 0;
      & > img {
        width: 100%;
        object-fit: cover;
      }
    }
    }


    .message {
      padding: 0.8rem 0.55rem;
      border: 1px solid #cacaca;
      border-radius: 5px;
      font-size: 0.8rem;
      & > .icon {
        color: #2196f3;
        margin-right: 0.45rem;
      }
    }
  }

`;
export const DescriptContents = styled.p`

`;
export const ImageProducts = styled.img`
  width: 70%;
  display: block;
  margin: 1rem auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ProductInvolveWrapper = styled.section`
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  overflow: hidden;
  & > .title {
    font-size: 1.2rem;
    padding: 0.75rem 0.35rem;
    background: ${(props) => props.color.name};
    color: #fff;
    position: relative;
    text-transform: uppercase;
    &:after {
      width: 100%;
      height: 5px;
      position: absolute;
      top: 100%;
      left: 0;
      content: "";
      background-image: url(/assets/images/logo/cong/dd4d2d.png);
      background-position: center center;
      background-repeat: repeat;
    }
  }
`;
export const FormPayment = styled.section`
  width: 100%;
  height: 100vh;
  padding: 3rem 1rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    content: "";
    background: rgba(0, 0, 0, 0.3);
  }
  .payment-content {
    width: 35%;
    padding: 1rem;
    background: #fff;
    border-radius: 5px;
    max-height: 80vh;
    overflow: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
    transition: all 0.3s linear;
    animation: ${scale} 0.85s linear forwards;
    z-index: 4;
    @media (max-width: 992px) {
      width: 45%;
    }
    @media (max-width: 678px) {
      width: 55%;
    }
    @media (max-width: 560px) {
      width: 65%;
    }
    @media (max-width: 470px) {
      width: 75%;
    }
    @media (max-width: 386px) {
      width: 90%;
    }
    @media (max-width: 330px) {
      width: 99%;
    }
    .title-form {
      text-align: center;
      text-transform: uppercase;
    }
    .btn-frm {
      display: flex;
      & > button {
        min-width: 110px;
        @media (max-width: 440px) {
          min-width: calc((100% - 0.9rem) / 2);
        }
      }
    }
  }
`;

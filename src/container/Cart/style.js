import styled from "styled-components";
export const CartWrapper = styled.section`
  padding: 3rem;
  @media (max-width: 520px) {
    padding: 3rem 0;
  }
  & > .container {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    input[name = "code"] {
      margin: 0;
    }
    .payment {
      width: 35%;
      padding: 1rem;
      margin: 0 1rem;
      box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
      transition: all 0.3s ease-in-out;
      @media (max-width: 1200px) {
        width: 30%;
        margin: 0 .5rem;
      }
      @media (max-width: 1100px) {
        width: 27%;
      }
      @media (max-width: 992px) {
        width: 100%;
        margin: 1.5rem 0;
      }
      .payment-content {
        transition: all .3s ease-in-out;
        @media (max-width: 992px) {
          width: 50%;
          margin: 1rem auto;
        }
        @media (max-width: 868px) {
          width: 60%;
          margin: 1rem auto;
        }
        @media (max-width: 768px) {
          width: 80%;
          margin: 1rem auto;
        }
        @media (max-width: 540px) {
          width: 90%;
          margin: 1rem auto;
        }
        .map {
        border-bottom: 1px solid #cacaca;
        @media (max-width: 992px) {

      }
      }
      .order-info {
        margin: 1rem 0;
        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          .price {
            color: #ee4d2d;
          }
          & > .input {
            flex: 1;
            padding-right: 5rem;
            .frm-code {
              @media (max-width: 1200px) {
                font-size: .9rem;
              }
            }
          }
          .btn-apply {
            /* flex: 1; */
            position: absolute;
            bottom: 0;
            right: 0;
            /* transform: translateY(-12px); */
          }
        }
        .vat {
          text-align: right;
        }
      }
      }
    }
    .list-product-cart {
      box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

      flex: 1;
      overflow: auto;
      max-height: 70vh;
    @media (max-width: 440px) {
      width: 100%;
      flex: none;
    }
      .link-to {
        display: inline-block;
        padding: 1rem;
        border-bottom: 1px solid #cacaca;
        width: 100%;
        color: #ee4d2d;
        text-transform: uppercase;
        position: sticky;
        top: 0;
        left: 0;
        background: #fff;
        z-index: 10;
      }
      & > table th,
      & > table td {
        border-bottom: 1px solid #cacaca;
      }
    }
    .relate-product {
      & > .title {
        padding: 1rem;
        position: relative;
        text-transform: uppercase;
        &:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 5px;
          background-image: url(/assets/images/logo/cong/white.png);
          background-position: center center;
          background-repeat: repeat;
        }
      }
      margin: 1.5rem 0;
      box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
      overflow: hidden;
    }
  }
`;

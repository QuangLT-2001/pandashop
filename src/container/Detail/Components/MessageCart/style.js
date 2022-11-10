import styled, { keyframes } from "styled-components";
const scale = keyframes`
  0% {
    transform: scale(0.8);
    opacity: .7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
export const MessageCartWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;

  .message-content {
    width: 60%;
    height: 80%;
    background: #fff;
    overflow-y: scroll;
    padding-bottom: 3rem;
    transform: scale(0.8);
    opacity: 0;
    animation: ${scale} 0.2s linear forwards;
    transition: all 0.3s linear;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, .85) 0px 5px 15px;
    @media (max-width: 992px) {
      width: 90%;
    }
    @media (max-width: 430px) {
      width: 95%;
    }
    .close-message {
      display: block;
      padding: 1rem;
      color: #000;
      text-align: right;
      border-bottom: 1px solid #cacaca;
      & > svg {
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
    & > .content {
      padding: 1rem;
      .product-to-cart {
        .message-text {
          color: #4caf50;
          font-weight: 400;
          &:before {
            content: "\f058";
            font-family: Fontawesome;
            margin-right: 0.35rem;
          }
        }
        .product-cart {
          color: #000;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          @media (max-width: 576px) {
            flex-direction: column;
          }
          & > img {
            width: 15%;
            object-fit: contain;
            transition: 0.3s;
            transition: all 0.3s ease-in-out;
            transform: scale(0.9);
            cursor: pointer;
            &:hover {
              transform: scale(1);
            }
            @media (max-width: 992px) {
              width: 20%;
            }
            @media (max-width: 576px) {
              width: 40%;
              display: block;
              margin: 1rem auto;
            }
            @media (max-width: 440px) {
              width: 50%;
            }
          }
          .info {
            flex: 1;
            padding: 1rem;
            line-height: 1.5;
            & > .name-product {
              font-size: 1.3rem;
              max-width: 80%;
              transition: 0.3s;
              cursor: pointer;
              @media (max-width: 992px) {
                max-width: 100%;
                font-size: 1.2rem;
                font-weight: 500;
                min-height: 50px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box;
              }
            }
            & > .price {
              color: ${props => props.color.name};
              font-size: 1.2rem;
            }
            & > .check {
              padding: 1rem 0;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              @media (max-width: 576px) {
                flex-direction: column;
              }
              & > button {
                @media (max-width: 576px) {
                  margin: 1rem;
                }
              }
            }
          }
        }
      }
    }
    .title {
      color: #000;
    }
  }
`;

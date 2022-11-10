import styled from "styled-components";
export const ProductPaymentItems = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  & > img {
    width: 10%;
    margin:  0 1rem 1rem 0;
    cursor: pointer;
    object-fit: cover;
    transition: all .3s linear;
    @media (max-width: 992px) {
      width: 15%;
    }
    @media (max-width: 768px) {
      width: 20%;
    }
    @media (max-width: 768px) {
    width: 35%;
  }
  }
  & > .info-product {
    width: 50%;
    @media (max-width: 768px) {
    width: 100%;
  }
    .name-product {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      font-size: 1rem;
      line-height: 1.5;
      cursor: pointer;
    }
    & > p span {
    margin: 0 .55rem 0 0;
    display: inline-block;
    .price-text {
      color: red;
    }
    &.brand {
      color: #1a21ff;
      cursor: pointer;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  }
  & > button {
    height: fit-content;
    margin: 0 1rem;
    @media (max-width: 768px) {
    margin-left: 0;
  }
  }

`;

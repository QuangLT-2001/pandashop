import styled from "styled-components";
export const ProductCartItems = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  color: #000;
  border-bottom: 1px solid #cacaca;
  @media (max-width: 540px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
  & > img {
    width: 15%;
    object-fit: contain;
    transition: all .3s ease-in-out;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 20%;
    }
    @media (max-width: 540px) {
      width: 40%;
      margin: 1rem 0;
    }
  }
  .info-right {
    display: flex;
    height: max-content;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .info {
      padding: 0 1rem;
      max-width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 768px) {
        max-width: 100%;
    }
    @media (max-width: 520px) {
      padding: 0;
    }
      & > .name-product {
        max-width: 100%;
        font-size: 1.2rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        cursor: pointer;
      }
      & > .relate-info {
        color: #757575;
        line-height: 1;
        font-size: 12px;
      }
    }
    & > .quantity {
      display: flex;
      height: max-content;
      padding: 0 1rem;

      @media (max-width: 768px) {
        margin: 1rem 0;
      }
      @media (max-width: 520px) {
      padding: 0;
    }
      .quantity-text {
        padding: 0.25rem 0.55rem;

      }
    }
    & > .price-text {
      display: block;
      margin: 0 1.5rem;
      color: #ee4d2d;
      font-size: 1.3rem;
      @media (max-width: 768px) {
        margin: 0 1rem;
      }
      @media (max-width: 520px) {
      padding: 0;
      margin: 0;
    }
    }
    & > .btn-delete {
      display: flex;
      align-items: flex-start;
      color: #ee4d2d;
      font-size: 1.3rem;
      @media (max-width: 520px) {
      margin: 0;
    }
      & > svg {
        margin-right: 0.35rem;
      }
    }
  }
`;

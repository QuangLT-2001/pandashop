import styled from "styled-components";
export const SellingItems = styled.div`
  padding: 0.15rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  border-bottom: 1px solid #cacaca;
  line-height: 1.5;
  overflow: hidden;
  &.adv-product-item {
    width: 100%;
    & > img {
      object-fit: cover;
      @media (max-width: 992px) {
      min-height: 270px;
    }
    @media (max-width: 768px) {
      min-height: 300px;
    }
    @media (max-width: 440px) {
      min-height: 0px;
    }
    }
    @media (max-width: 992px) {
      width: calc(100%/3);
      border: 1px solid #cacaca;
    }
    @media (max-width: 768px) {
      width: calc(100%/2);
    }
    @media (max-width: 440px) {
      /* width: 100%; */
    }
    @media (max-width: 378px) {
      width: 100%;
    }
  }
  & > span img {
    width: 100%;
    max-height: 261px;
    transition: all .3s linear !important;
    transform: scale(.9);
    cursor: pointer;
    &:hover {
      transform: scale(1);
    }
  }
  .title-product {
    font-size: .95rem;
    margin: .55rem 0;
    max-width: 100%;
    min-height: 20px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .price {
    color: ${props =>  props.color.name};
    font-size: 1.3rem;
    min-height: 39px;
  }
  .discount {
    color: #cacaca;
    &:after {
      content: '${props => props.discountContent ? "-" + props.discountContent + '%' : ''}';
      text-decoration: none;
      color: #000;
      margin-left: .45rem;
    }
    &:before {
      content: '${props => props.formatDiscount ? props.formatDiscount : ''}';
      text-decoration: none;
      color: #000;
      text-decoration: line-through;
      color: #cacaca;
      margin-right: .35rem;
    }
  }
`;

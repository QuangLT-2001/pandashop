import styled from "styled-components";
export const RelateProductItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: .65rem 0;
    &:first-child {
      margin-top: 1.5rem;
    }
    .relate-left {
      width: 30%;
      padding: .75rem;
    }
    & > span {
      width: 30%;
      display: block;
     & > img {
      width: 100%;
      cursor: pointer;
    }
    }
    .info {
      width: 70%;
      padding: 0 .2rem;
      .name-product {
        max-width: 400px;
        display: -webkit-box;
        font-size: 1rem;
        line-height: 1.3;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        cursor: pointer;
      }
      .price {
        display: flex;
        & > p {
          margin-right: .25rem;
        }
        .price-text {
          color: ${props => props.color.name};
        }
        .price-discount-content {
          text-decoration: line-through;
          color: #cacaca;
        }
      }
    }
`
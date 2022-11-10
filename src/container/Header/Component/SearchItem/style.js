import styled from "styled-components";
export const SearchItems = styled.div`
     display: flex;
     align-items: flex-start;
     margin: 1rem 0;
     padding: 1rem;
     &:not(:last-child) {
          border-bottom: 1px solid #cacaca;
     }
     @media (max-width: 992px) {
          flex-direction: column;
          margin: 0;
     }
     & > img {
          width: 20%;
          transform: scale(.9);
          transition: all .3s;
          margin: 0 .55rem;
          cursor: pointer;
          &:hover {
               transform: scale(1);
          }
          @media (max-width: 992px) {
          margin: 1rem 0;
          width: 30%;
     }
     @media (max-width: 340px) {
          margin: 1rem 0;
          width: 35%;
     }
     }
     & > .info {
          .name-product {
               font-size: 1.1rem;
               cursor: pointer;
          }
          .price {
               color: #ee4d2d;
               font-size: 1.2rem;
               font-weight: 550;
          }
          .character {
               margin: .5rem 0;
               & > span:not(:first-child) {
                    border-left: 1px solid #ccc;
               }
               & > span:first-child {
                    padding-left: 0;
               }
               .size {
               margin-right: 1rem;
          }
          .size,.color {
               padding: 0 1rem;
               display: inline-block;
          }
          }
          .brand {
               font-size: 1rem;
               .brand-uppercase {
                    text-transform: uppercase;
                    transition: all .3s linear;
                    cursor: pointer;
                    &:hover {
                         text-decoration: underline;
                    }
               }
          }
     }
`

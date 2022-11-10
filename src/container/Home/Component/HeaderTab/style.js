import styled from "styled-components";
export const HeaderTabWrapper = styled.div`
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     text-transform: uppercase;
     padding: .55rem .55rem .55rem 0;
     border-bottom: 2px solid #000;
     margin-bottom: 1rem;
     .title-body {
          margin: 0;
          font-size: 1rem;
          background: #000;
          color: #fff;
          padding: .35rem 1rem;
     }
     .see-more {
          cursor: pointer;
          color: #f4623a;
          &:after {
               content: "\f105";
               font-family: Fontawesome;
          }
     }
`
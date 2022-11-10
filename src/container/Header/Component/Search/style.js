import styled, { keyframes } from "styled-components";
const animationRotate = keyframes`
     from {
          transform: rotate(0);
     }to {
          transform: rotate(360deg);
     }
`
export const SearchWrapper = styled.div`
        position: relative;
        /* width: 50%; */
        flex-grow: 1;
        @media (max-width: 992px) {
          flex: 0.9;
        }
        @media (max-width: 768px) {
          display: none;
        }
        &.search-mobile {
          display: none;
          position: fixed;
          top: 0;
          left: 50%;
          transform: translate(-50%,0);
          margin-top: 5rem;
          z-index: 10000;
          @media (max-width: 768px) {
               display: block;
               width: 90%;
          }
        }
        .input {
          width: 100%;
          position: relative;
          transition: all 0.3s ease-in-out;
          & > input {
            margin: 0;
            height: 100%;
            border: 2px solid #fff;
            padding-right: 3rem;
          }

        }
        .search-element {
          margin: 1rem 0;
          padding: 1.5rem;
          position: absolute;
          z-index: 9999;
          width: 100%;
          max-height: 70vh;
          overflow: auto;
          background: #fff;
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: all 0.3s ease-in-out;
        }
`
export const InputSearchWrapper = styled.div`
     position: relative;
     .btn-search {
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1rem;
          color: #a3a3a3;
          .icon-search {
               border-left: 1px solid #ccc;
               padding-left: 1rem;
               height: 80%;
               display: flex;
               align-items: center;
               cursor: pointer;
               color: ${props => props.color && "#000"};
               transition: all .3s ease-in-out;
          }
          .icon-close, .icon-loading {
               position: relative;
               cursor: pointer;
               margin-right: 1rem;
          }
          .icon-loading {
               animation: ${animationRotate} 3s linear infinite;
          }
     }

`
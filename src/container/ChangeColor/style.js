import styled, { keyframes } from "styled-components";
const rotate = keyframes`
     100% {
          transform: rotate(360deg);
     }
`


export const ChangeColorWrapper = styled.section`
     position: fixed;
     top: 50%;
     right: 0;
     margin: 2rem;
     z-index: 107;
     transition: .3s;

     @media (max-width: 992px) {
          bottom: 20%;
     }
     & > .icon-color {
          color: ${props => props.color};
          font-size: 2rem;
          transition: .3s;
          cursor: pointer;
          & > svg {
               animation: ${rotate} 3s infinite linear;
          }
     }
     & > .color-content {
          position: absolute;
          bottom: 100%;
          right: 100%;
          width: 320px;
          transition: .3s;
          border-radius: 5px;
          margin: 1rem;
          background: #fff;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          transform: ${props => props.status ? "translate(0, 0)" : "translate(0, 300%)"};
          @media (max-width: 992px) {
               /* bottom: 0; */
               right: -100%;
          }
          @media (max-width: 460px) {
               width: 90vw;
          }

          & > .icon-close {
               font-size: 1.5rem;
               text-align: center;
               background: #fff;
               width: 50px;
               height: 50px;
               display: flex;
               justify-content: center;
               align-items: center;
               margin: -10px auto;
               transition: .3s;
               border-radius: 50%;
               cursor: pointer;
          }
          .title {
               padding: 1rem;
               color: ${props => props.color};
               text-align: center;
               border-bottom: 1px solid #cacaca;
               font-weight: 500;
               transition: .3s;
               background: #fff;
               margin: 0;
               border-top-left-radius: 5px;
               border-top-right-radius: 5px;
          }
         .color-text {
          display: flex;
          align-items: center;
          padding: 1rem;
          margin: 0;
          .current-color {
               width: 70px;
               height: 20px;
               background: ${props => props.color};
               display: inline-block;
               margin-left: 1rem;
          }
         }
          .list-color {
               background: #fff;
               display: flex;
               justify-content: flex-start;
               flex-wrap: wrap;
               transition: .3s;
               max-height: 250px;
               overflow: auto;
               border-bottom-left-radius: 5px;
               border-bottom-right-radius: 5px;
               padding: 0 1rem;
               li:last-child {
                    display: flex;
                    align-items: center;
                    width: 100%;
                   & > .color {
                    width: 70px;
                    height: 20px;
                    display: inline-block;
                    background: ${props => props.color};
               }
               }

          }
     }
`
export const ColorItems = styled.li`
     width: 50px;
     height: 50px;
     border-radius: 50%;
     background: ${props => props.color};
     margin: .35rem;
     transition: .3s;
     transform: scale(.8);
     cursor: pointer;
     &.active {
          transform: scale(1);
     }
`
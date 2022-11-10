import styled, { keyframes } from "styled-components";
const scale = keyframes`
     from {
          transform: scale(.9);
     }
     to {
          transform: scale(1);
     }
`
export const MessageWrapper = styled.div`
     width: 100%;
     height: 100vh;
     position: fixed;
     top: 0;
     left: 0;
     z-index: 1002;
     display: flex;
     justify-content: center;
     align-items: center;
     &:after {
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          background: rgba(0,0,0,.3);
          width: 100%;
          height: 100%;
     }
     .message-content {
          width: 30%;
          height: fit-content;
          background: #fff;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          position: relative;
          z-index: 2;
          animation: ${scale} .55s linear forwards;
          transition: all .3s ease;
          @media (max-width: 992px) {
               width: 40%;
          }
          @media (max-width: 768px) {
               width: 50%;
          }
          @media (max-width: 650px) {
               width: 60%;
          }
          @media (max-width: 410px) {
               width: 70%;
          }
          @media (max-width: 350px) {
               width: 90%;
          }
          .title-message {
               padding: 1rem;
               border-bottom: 1px solid #ddd;

          }
          .message-body {
               & > p {
                    padding: 1rem;
                    text-align: center;
               }
               .btn-message {
                    display: flex;
                    justify-content: flex-end;
                    &> button {
                         min-width: 100px;
                         display: block;
                         @media (max-width: 500px) {
                              min-width: calc((100% - .9rem)/2);
                         }
                    }
               }
          }
     }
`
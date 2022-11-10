import styled, { keyframes } from "styled-components";
const message = keyframes `
     from {
       transform: translateX(100%);
     }
     to {
          transform: translateY(0);
     }
`
export const MessagePayWrapper = styled.p`
     position: fixed;
     top: 0;
     right: 0;
     margin: 1rem;
     z-index: 1000;
     color: #fff;
     background: #9ce401;
     padding: .15rem 1rem;
     border-radius: 5px;
     transform: translateX(120%);
     animation: ${message} 5s ease 1;

`
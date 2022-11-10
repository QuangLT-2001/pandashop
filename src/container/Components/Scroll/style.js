import styled, { keyframes } from "styled-components";
const translate = keyframes`
     from {
          transform: translateY(-10px);
     }
     to {
          transform: translateY(10px);
     }
`
export const ScrollWrapper = styled.span`
     cursor: pointer;
     position: fixed;
     bottom:40px;
     left: 50%;
     transform: translate(-50%, 0);
     background: ${props => props.color.name} ;
     width: 40px;
     height: 40px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 99;
     color: #fff;
     font-size: 1.5rem;
     margin: 1rem;
     animation: ${translate} 1.2s linear infinite alternate-reverse;
`
import styled, {keyframes} from "styled-components";
export const PayIconWrapper = styled.span`
     font-size: 2rem;
     color: ${props => props.color};
     position: fixed;
     top: 50%;
     right: 0;
     z-index: 103;
     margin: 2rem;
     cursor: pointer;
     transition: all .3s linear;
     &:after {
          width: max-content;
          padding: .75rem 1rem;
          position: absolute;
          top: 100%;
          left: -100%;
          content: "Đơn hàng";
          font-size: 1rem;
          color: #000;
          border-radius: 3px;
          margin: .45rem -2rem;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          z-index: 105;
          background: #fff;
          transition: .3s;
          @media (max-width: 1024px) {
          right: -200%;
     }
     }
`
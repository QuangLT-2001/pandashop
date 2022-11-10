import styled from "styled-components";
const setPosition = type => {
     switch(type) {
          case "mobile":
               return "fixed";
          default:
               return "static";
     }
}
const setFontsize = type => {
     switch(type) {
          case "mobile":
               return "2rem"
          default:
               return "auto"
     }
}
export const  CloseWrapper = styled.span`
     position: ${props => setPosition(props.type)};
     top: 0;
     right: 0;
     color: #fff;
     z-index: 10000;
     cursor: pointer;
     margin: 2rem;
     font-size: ${props => setFontsize(props.type)};
     line-height: 1;
`
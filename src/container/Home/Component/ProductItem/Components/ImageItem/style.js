import styled from "styled-components";
export const ImageItemWrapper = styled.li`
     height: 40px;
     max-width: 40px;
     border-radius: 50%;
     overflow: hidden;
     cursor: pointer;
     &.active {
          border: 2px solid #000;
     }
     &:not(:last-child) {
          margin-right: 1rem;
     }
     &  > img {
          min-width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
     }
`
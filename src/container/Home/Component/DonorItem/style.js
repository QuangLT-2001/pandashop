import styled from "styled-components";
export const DonorItemWrapper = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 1rem;
     height: max-content;
     .lazy-load-image-background {
          height: auto;
        & >  img {
          width: 100%;
          object-fit: contain;
     }
     }

`
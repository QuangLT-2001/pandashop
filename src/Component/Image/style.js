import styled from "styled-components";
export const LazyImageWrapper = styled.div`
     img {
          width: 100%;
          height: 100%;
     }
      .lazy-load-image-background {
          width: 100%;
          height: 100%;
          & > img {
               object-fit: cover;

          }
}

`
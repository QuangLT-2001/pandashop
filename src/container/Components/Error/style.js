import styled from "styled-components";
export const ErrorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
  height: 100vh;
  & > img {
    width: 40%;
  }
  .error-text {
    font-size: 1.75rem;
    text-align: center;
    padding: 1rem;
  }
`
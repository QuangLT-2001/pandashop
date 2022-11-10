import styled from "styled-components";
export const EmptyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  flex: 1;
  text-align: center;
  & > img {
    width: 40%;
  }
  .empty-text {
    font-size: 1.75rem;
    line-height: 1.5;
  }
`
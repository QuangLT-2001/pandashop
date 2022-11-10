import styled from "styled-components";
export const PostWrapper = styled.section`
  padding: 2.5rem 0;
  .title {
    text-align: center;
    .link-to {
      color: #000;
      font-weight: 550;
      font-size: 1.2rem;
    }
    & > span {
      margin-left: .35rem;
      color: ${props => props.color.name};
      font-weight: 550;
    }
  }
  .title-page {
    text-align: center;
    font-weight: 550;
    color: ${props => props.color.name};
  }
`
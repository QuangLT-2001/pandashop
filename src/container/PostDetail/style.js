import styled from "styled-components";
export const PostDetailWrapper = styled.section`
  & > .container {
    display: flex;
    padding: 2rem;
    flex-wrap: wrap;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    margin: 1rem auto;
    transition: .3s;
    @media (max-width: 520px) {
      padding: 1rem;
    }

  }
`;
export const MainPostDetailWrapper = styled.div`
  flex: 1;
  @media (max-width: 520px) {
    width: 100%;
  }
  & > span {
    width: 100%;
    & > img {
      width: 100%;

    }
  }
  .time {
    display: flex;
    color: #7a7a9d;
    .time-item {
      padding: 0 1rem;
      display: block;
      &:before {
        content: "\f017";
        font-family: Fontawesome;
        margin-right: 0.45rem;
      }
    }
  }
  .image-post {
    width: 100%;
    text-align: center;
    font-style: italic;
    & > span {
      width: 70%;
      display: block;
      margin: .75rem auto;
      & > img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      margin: 1rem 0;
    }
    }
  }
  .indexing {
    font-weight: 550;
  }
`;
export const LeftPostDetailWrapper = styled.div`
  width: 35%;
  margin: 0 1rem;
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
  }
  &>.lazy-image {
      @media (max-width: 992px) {
        width: 100%;
        padding: 1rem 0;
      }
    }
  .title {
    padding: 0.75rem 1rem;
    background: ${props => props.color.name};
    color: #fff;
    text-transform: uppercase;
    font-size: 1.5rem;
    position: relative;
    transition: all .3s ease-in-out;
    @media (max-width: 992px) {
      width: 100%;

    }
    @media (max-width: 378px) {
      font-size: 1.3rem;
    }
    @media (max-width: 338px) {
      font-size: 1.1rem;
    }
    &:after {
      width: 100%;
      height: 5px;
      position: absolute;
      top: 100%;
      left: 0px;
      content: "";
      background-image: url("/assets/images/logo/cong/dd4d2d.png");
    }
  }
  & > img {
    width: 100%;
    margin: 1rem 0;
    transition: .3s;
    @media (max-width: 992px) {
      width: 48%;
    }
    @media (max-width: 378px) {
      width: 100%;
    }
  }

`;

export const RelateNewsWrapper = styled.section`
  width: 100%;
  .title {
    padding: 1rem;
    position: relative;
    &:after {
      content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 5px;
    background-image: url(/assets/images/logo/cong/white.png);
    background-position: center center;
    background-repeat: repeat;
    }
  }
`
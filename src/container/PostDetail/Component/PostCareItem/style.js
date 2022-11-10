import styled from "styled-components";
export const PostCareItems = styled.div`
  padding: 1.2rem 0;
  border-bottom: 1px solid #cacaca;
  display: flex;
  transition: all .3s linear;
  @media (max-width: 530px) {
    flex-direction: column;
    padding: 0;
  }
  .lazy-image {
    width: 30%;
  }

  & > span {
    width: 30%;
    height: fit-content;
    display: block;
    & >img {
    width: 100%;
    height: fit-content;
    cursor: pointer;
    transition: all .3s linear;
    @media (max-width: 530px) {
    width: 100%;
    margin: 1rem 0;
  }
  }
  }
  & > .info {
    flex: 1;
    padding: 0 1rem;
    font-size: .8rem;
    @media (max-width: 530px) {
    padding: 0;
  }
    & > .name-post {
      max-width: 100%;
      min-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      cursor: pointer;
    }
    & > .desc-post {
      max-width: 100%;
      min-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      color: #cacaca;
    }
  }

`
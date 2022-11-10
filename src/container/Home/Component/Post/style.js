import styled from "styled-components";
export const PostItems = styled.div`
  transition: .3s;
  margin: .5rem 0;
  .post-item {
    border: 1px solid #cacaca;
    padding: .5rem;
    line-height: 1.5;
    .lazy-image {
      height: 195px;
      cursor: pointer;
    }
    .info-post {
      padding: 1rem .35rem;
      .name-post {
        max-width: 100%;
        font-size: 1.4rem;
        font-weight: 550;
        min-height: 55px  ;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
      .descript-post {
        max-width: 100%;
        font-size: 1rem;
        font-weight: 550;
        color: #9a9a9a;
        cursor: pointer;
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }
    .time {
      display:block;
      text-align: right;
      padding: 0rem .35rem 1rem;
      color: #9a9a9a;
      &:before {
        content: '\f017';
        font-family: Fontawesome;
        margin-right: .35rem;
      }
    }
    & > button:hover {
      background: rgb(238 77 45 / 100%);

    }
  }

`;

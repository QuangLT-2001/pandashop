import styled from "styled-components";

export const TabPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .empty {
    flex-grow: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 3rem;
    color: #cacaca;
    & > img {
      width: 30%;
    }
  }
`;
export const HeadTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
  border-bottom: 1.5px solid #ddd;
  margin-bottom: 1rem;
  width: 100%;
  & > div {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
export const NavbarWrapper = styled.div`
  width: 20%;
  @media (max-width: 1200px) {
    display: none;
  }

  &.navbar-mobile {
    display: none;
    margin-bottom: 1rem;
    .filter-item {
      width: 100%;
    }
    @media (max-width: 1200px) {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      width: 100%;
    }
    & > .select-wrapper {
      margin-left: 1rem;
      z-index: 1006;
      @media (max-width: 678px) {
        width: 45%;
      }
      @media (max-width: 365px) {
        min-width: 100%;
        margin: 0 0 1rem 0;
      }
      &:nth-child(2) {
        z-index: 1005;
      }

    }


  }

  .list-filter {
    padding: 0.75rem !important;
    @media (max-width: 992px) {
      padding: 0 !important;
    }
    .filter-item {
      border: 1.2px solid #cacaca;
      margin: 0.45rem 0;
      border-radius: 5px;

      .title-navbar {
        border-radius: 5px;
        padding: 0.75rem 0.25rem;
        color: #fff;
        background: ${props => props.color ? props.color.name : "#ee4d2d"};
        font-weight: 700;
        text-align: center;
      }
      .filter-content {
        padding: 1rem;
      }
      @media (max-width: 992px) {
        border: none;
      }
      & > ul {
        flex-grow: 1;
        padding: 0.25rem 0.55rem !important;
        & > li input[type="text"] {
          width: 100%;
          border-radius: 5px;
          border: 1px solid #cacaca;
        }
      }
    }
  }
  .list-ralate-product {
    @media (max-width: 992px) {
      display: none;
    }
    .ralate-product-content {

      border-radius: 5px;
      width: 100%;

      .title-navbar {
        padding: 0.75rem 0.25rem;
        color: #fff;
        background: ${props => props.color.name};
        font-weight: 700;
        width: 100%;
        border-radius: 5px;
        text-align: center;
        margin: 0;
        position: sticky;
        top: 0;
        z-index: 4;
      }
      .relate-product-body {
        max-height: 80vh;
        overflow: auto;
        overflow-x: hidden;
        border: 1.2px solid #cacaca;
        margin-top: -1rem;
      }
    }
  }
`;

import styled from "styled-components";
export const BannerImageItems = styled.li`
  width: 100%;
  padding: .55rem;
  height: calc(${props => props.type === "banner-right-item" ? '100%/2' : '100%'});
  @media (max-width: 992px) {
    height: 100%;
  }
  &:last-child {
    @media (max-width: 530px) {
      display: ${props => props.type === "banner-right" ? 'none' : 'block'};
    }
  }
  & > a span {
    width: 100%;
    height: 100%;
    display: block;
   & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    object-fit: cover;
  }
  }
`
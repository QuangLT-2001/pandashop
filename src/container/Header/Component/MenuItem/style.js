import styled from "styled-components";
export const MenuItems = styled.li`
  position: relative;
  @media (max-width: 420px) {
    text-align: center;
  }
  &:hover .sub-menu {
    transform: rotateX(0);
    @media (max-width: 768px) {
      height: 100%;
    }
  }
  & > .menu-link {
    display: ${props => props.type ? 'flex' : 'block'};
    flex-direction: column;
    align-items: center;
    padding: .75rem 1rem;
    color: #000;
    text-transform: uppercase;
    font-weight: 550;
    position: relative;
    transition: .3s;
    @media (max-width: 992px) {
      padding: .75rem;
    }
    &:after {
      content: '${props => props.subMenu ? '\f107' : ''}';
      font-family: Fontawesome;
      margin-left: .35rem;
    }
    & > svg {
      font-size: 1.2rem;
      margin: .35rem 0;
    }
    &.active {
      color: ${props => props.color};
    }
  }
  .sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    z-index: 99999;
    min-width: 180px;
    transition: all .3s linear;
    transform-origin: center top;
    transform: rotateX(90deg);
    overflow: hidden;
    @media (max-width: 768px) {
      transition: all .3s linear;
      position: relative;
      height: 0;
    }
  }

`
export const SubMenuItems = styled.li`
  .sub-menu-link {
    color: #000;
    font-weight: 550;
    text-transform: uppercase;
    font-size: 1rem;
    padding: .75rem 1rem;
    border-bottom: 1px solid #cacaca;
    display: block;
    &.active {
      color: ${props => props.color};
      font-size: 1.1rem;
    }
    @media (max-width:768px) {
      border-bottom: none;
    }
}
`
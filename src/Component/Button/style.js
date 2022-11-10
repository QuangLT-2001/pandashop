import { Switch } from "react-router";
import styled from "styled-components";
const setBackground = (type) => {
  switch (type) {
    case "view": {
      return "#000";
    }
    case "post": {
      return "rgb(238 77 45 / 80%)";
    }
    case "add": {
      return props => props.color ? props.color.name : "rgb(238 77 45 / 80%)";
    }
    case "counter": {
      return "gray";
    }
    case "buy": {
      return "rgb(255 185 22 / 80%)";
    }
    case "add to cart": {
      return "rgb(245 114 36 / 80%)";
    }
    case "apply": {
      return "#ee4d2d";
    }
    case "confirm": {
      return "#ee4d2d";
    }
    case "login": {
      return "#5994ff";
    }
    case "register": {
      return "#ee4d2d";
    }
    case "comeBack": {
      return "#f60a0a"
    }
    case "payment": {
      return "rgb(255 185 22 / 80%)"
    }
    case "cancel": {
      return "#f60a0a"
    }
    case "accept": {
      return "#43d612"
    }
    default:
      return "transparent";
  }
};
const setColor = (type) => {
  switch (type) {
    case "more-product": {
      return "#fff";
    }
    case "post": {
      return "#fff";
    }
    case "add": {
      return "#fff";
    }
    case "buy": {
      return "#fff";
    }
    case "add to cart": {
      return "#fff";
    }
    case "to": {
      return "#000";
    }
    case "counter": {
      return "#fff";
    }
    case "apply": {
      return "#fff";
    }
    case "confirm": {
      return "#fff";
    }
    case "register":
      return "#fff";
    case "login":
      return "#fff"
    case "comeBack":
      return "#fff"
    case "payment":
      return "#fff";
    case "cancel":
      return "#fff"
    case "accept":
      return "#fff"
    case "showMore":
      return "#1a9cb7"
    default:
  }
};
const setFontSize = (type) => {
  switch (type) {
    case "register": {
      return "1.2rem";
    }
    case "login": {
      return "1.2rem";
    }
    case "more-product": {
      return "1.2rem";
    }
    default:
  }
};
const setBorderRadius = (type) => {
  switch (type) {
    default: {
      return "3px";
    }
  }
};
const setColorHover = (type) => {
  switch (type) {
    case "more": {
      return "#fff";
    }
    case "more-product": {
      return "#000";
    }
    case "to": {
      return "#fff";
    }
    case "showMore":
      return "#fff"
    default:
  }
};
const setBorderRight = (type) => {
  switch (type) {
    case "login": {
      return "2px solid #fff !important";
    }
    default:
  }
};
const setPadding = (type) => {
  switch (type) {
    case "more": {
      return "0.5rem 1.5rem";
    }
    case "post": {
      return "1rem 1.5rem";
    }
    case "add": {
      return ".85rem 1.35rem";
    }
    case "buy": {
      return "1rem .25rem";
    }
    case "to": {
      return "1rem 2rem";
    }
    case "add to cart": {
      return "1rem .25rem";
    }
    case "apply": {
      return "0rem .45rem";
    }
    case "confirm": {
      return ".65rem .45rem";
    }
    case "register":
      return ".85rem 1.5rem";
    case "login":
      return ".85rem 1.5rem";
    case "payment":
      return ".85rem 1.5rem"
    case "comeBack":
      return ".85rem 1.5rem"
    case "cancel":
      return ".65rem 1.5rem"
    case "accept":
      return ".65rem 1.5rem"
    default:
      return "0.25rem .55rem";
  }
};
const setBorder = (type) => {
  switch (type) {
    case "more": {
      return "2px solid #000";
    }
    case "more-product": {
      return "2px solid #fff";
    }
    case "showMore":
      return "2px solid #1a9cb7"
    case "to": {
      return props => props.color ? "2px solid" + props.color.name : "2px solid  #ee4d2d";;
    }
    default:
      return "none";
  }
};
const setHoverBg = (type) => {
  switch (type) {
    case "more": {
      return "#000";
    }
    case "more-product": {
      return "#fff";
    }
    case "buy": {
      return "rgb(255 185 22 / 100%)";
    }
    case "add to cart": {
      return "rgb(245 114 36 / 100%)";
    }
    case "to": {
      return props => props.color ? props.color.name : "#ee4d2d";
    }
    case "showMore": {
      return "#1a9cb7"
    }
    default:
  }
};
const setTextTransform = (type) => {
  switch (type) {
    case "more-product": {
      return "uppercase";
    }
    case "post": {
      return "uppercase";
    }
    case "add": {
      return "uppercase";
    }
    case "to": {
      return "uppercase";
    }
    case "apply": {
      return "uppercase";
    }
    case "confirm": {
      return "uppercase";
    }
    case "showMore":
      return "uppercase"
    default:
      return "none";
  }
};
const setMargin = (type) => {
  switch (type) {
    case "post": {
      return "1rem .35rem";
    }
    case "add": {
      return "1rem auto";
    }
    case "buy": {
      return ".25rem .55rem";
    }
    case "add to cart": {
      return ".25rem .55rem";
    }
    case "login":
      return "0 .45rem"
    case "comeBack":
      return "0 .45rem 0 0"
    case "payment":
      return "0 .45rem"
    case "cancel":
      return "0 .45rem"
    case "showMore":
      return "2rem auto"
    default:
  }
};
const setWidth = (type) => {
  switch (type) {
    case "buy": {
      return "50% !important";
    }
    case "add to cart": {
      return "50% !important";
    }
    case "counter": {
      return "30px";
    }
    case "confirm": {
      return "100% !important"
    }
    default:
      return "auto";
  }
};
const setHeight = type => {
  switch (type) {
    case "counter": {
      return "30px";
    }
    case "apply":
      return "100%"
    default:
      return "auto";
  }
}

const setMinWidth = type => {
  switch (type) {
    case "register":
      return "120px";
    case "login":
      return "120px";
    default:
      return "auto"
  }
}

export const ButtonWrapper = styled.button`
  width: ${(props) => setWidth(props.type)};
  height: ${(props) => setHeight(props.type)};
  border: ${(props) => setBorder(props.type)};
  background: ${(props) => setBackground(props.type)};
  color: ${(props) => setColor(props.type)};
  font-size: ${(props) => setFontSize(props.type)};
  transition: 0.3s;
  outline: none !important;
  padding: ${(props) => setPadding(props.type)};
  margin: ${(props) => setMargin(props.type)};
  text-align: center;
  position: relative;
  outline: none;
  text-transform: ${(props) => setTextTransform(props.type)};
  display: block;
  z-index: 6;
  border-radius: ${(props) => setBorderRadius(props.type)};
  min-width: ${props => setMinWidth(props.type)};
  &.disabled {
    cursor: no-drop;
    background: rgb(128 128 128 / 20%);
  }
  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    content: "";
    border-right: ${(props) => setBorderRight(props.type)};
  }
  &:hover {
    color: ${(props) => setColorHover(props.type)};
    background: ${(props) => setHoverBg(props.type)};
  }
`;

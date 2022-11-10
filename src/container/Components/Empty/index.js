import React from "react";
import { EmptyWrapper } from "./style";
import Buttons from './../../../Component/Button'
import PropTypes from "prop-types";

const Empty = props => {
  const { history, onClick, name } = props;
  const body = document.querySelector("body")

  return (
    <EmptyWrapper>
      <img src="/assets/images/product/empty.jpg" alt="empty" />
      <p className="empty-text">
        {name}
      </p>
      <Buttons name="Tiếp tục mua sắm" type="to" onClick={onClick} />
    </EmptyWrapper>
  );
}
Empty.propTypes = {
  history: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string
}

export default Empty;
import React from "react";
import { MessageWrapper } from "./style";
import PropTypes from "prop-types";

const Message = props => {
  const {name, color} = props;
  return(
    <MessageWrapper color={color}>
      {name}
    </MessageWrapper>
  );
}

Message.propTypes = {
  name: PropTypes.string,
  color: PropTypes.object
}

export default Message;
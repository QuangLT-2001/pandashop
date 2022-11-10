import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CloseWrapper } from "./style";
const Close = ({ onClick, type }) => {
     return <CloseWrapper className="close" type={type} onClick={onClick}>
          <FontAwesomeIcon icon={faTimes} />
     </CloseWrapper>
}
export default Close;
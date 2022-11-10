import React from "react";
import { PayIconWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectColor } from "./selector";
const PayIcon = props => {
     const history = useHistory();
     const colorCurrent = useSelector(selectColor)

     const handleClickToPay = () => {
          history.push("/don-hang")
     }
     return(
          <PayIconWrapper
          className="pay"
          onClick={handleClickToPay}
          color={colorCurrent.name}
          >
               <FontAwesomeIcon icon={faMoneyBillWave}/>
          </PayIconWrapper>
     );
}

export default PayIcon;
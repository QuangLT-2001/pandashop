import React from "react";
import { ErrorWrapper } from "./style";
import PropTypes from "prop-types";
const ErrorPay = ({name}) => {
     return(
          <ErrorWrapper className="error">
               {name}
          </ErrorWrapper>
     );
}
ErrorPay.propTypes = {
     name: PropTypes.string
}
export default ErrorPay;
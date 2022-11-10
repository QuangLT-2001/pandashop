import React from "react";
import { ErrorWrapper } from "./style";
import TitlePage from "../../../Component/Title";
const Error = props => {
  return (
    <ErrorWrapper>
      <TitlePage name="error"/>
      <img src="/assets/images/product/empty.jpg" alt="empty" />
      <p className="error-text">
        Trang bạn cần tìm không tồn tại
      </p>

    </ErrorWrapper>
  );
}
export default Error;
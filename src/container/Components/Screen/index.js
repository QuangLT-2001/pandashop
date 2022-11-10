import React from "react";
import { ScreenWrapper } from "./style";
import TitlePage from "../../../Component/Title";
const Screen = props => {
  return (
    <ScreenWrapper>
      <TitlePage name="Lỗi thiết bị"/>
      <img src="/Assets/Images/product/empty.jpg" alt="empty" />
      <p className="error-text">
      rang web chỉ hiển thị tốt trên các thiết bị có màn hình từ 320px trở lên. Vui lòng lựa chọn lại thiết bị!!!
      </p>

    </ScreenWrapper>
  );
}
export default Screen;
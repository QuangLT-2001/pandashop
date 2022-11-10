import React from "react";
import { MessageWrapper } from "./style";
import Buttons from "../../../../Component/Button";
import PropTypes from "prop-types";
const Message = props => {
     const {
          handleClickCancel,
          handleClickDeleteProduct
     } = props;
     return (
          <MessageWrapper>
               <div className="message-content">
                    <h3 className="title-message">
                         Thông báo
                    </h3>
                    <div className="message-body">
                         <p>
                              Bạn có chắc chắn muốn hủy đơn này không?
                         </p>
                         <div className="btn-message">
                              <Buttons type="cancel" name="Hủy"
                                   onClick={handleClickCancel}
                              />
                              <Buttons type="accept" name="Đồng ý"
                                   onClick={handleClickDeleteProduct}
                              />
                         </div>
                    </div>
               </div>
          </MessageWrapper>
     )
}
Message.propTypes = {
     handleClickCancel: PropTypes.func,
     handleClickDeleteProduct: PropTypes.func
}
export default Message;
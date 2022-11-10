import React from "react";
import MyImage from "../../../../Component/Image";
import { DonorItemWrapper } from "./style";
const DonorItem = ({donorItem}) => {
     return <DonorItemWrapper className="donor-item">
         <MyImage

                    image={donorItem.name}
                    name={donorItem.name}
                    className="image-donor"
                    />
     </DonorItemWrapper>
}
export default DonorItem;
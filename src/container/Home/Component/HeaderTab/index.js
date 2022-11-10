import React from "react";
import { HeaderTabWrapper } from "./style";
const HeaderTab = ({
     handleLocationToSeeAll,
     nameTitleBody,
     nameSeeMore
}) => {

     return (
          <HeaderTabWrapper className="header-tab">
               <h3 className="title-body">
                    {nameTitleBody}
               </h3>
               <span className="see-more" onClick={handleLocationToSeeAll}> {nameSeeMore} </span>
          </HeaderTabWrapper>
     );
}
export default HeaderTab;
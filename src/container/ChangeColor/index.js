import React, { useEffect, useState, useContext, memo, useRef } from "react";
import {
     ChangeColorWrapper,
     ColorItems
} from "./style";
import { Colors } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faTimes,
     faCog
} from "@fortawesome/free-solid-svg-icons";

import {
     getColorRequest,
     putColorRequest
} from "./actions";
import { connect, useSelector, useDispatch } from "react-redux";
import {
     selectColor
} from "./selector";
import {
     ThemeColor
} from "./../../Component/Theme"
import PropTypes from "prop-types";
import Input from "../../Component/input";
import Color from "../../Component/Color";
import { v4 as uuidv4 } from "uuid";

const ColorItem = ({
     colorItem,
     active,
     onClick
}) => {

     return (
          <ColorItems
               className={`color-item ${active && "active"}`}
               color={colorItem.name}
               onClick={onClick}
          >

          </ColorItems>
     );
}
const ChangeColor = () => {
     const [colors, setColors] = useState([]);
     const [status, setStatus] = useState(false);
     const [currentColor, setCurrentColor] = useState(0);
     const { stateColor, setStateColor } = useContext(ThemeColor);
     const [selectTypeColor, setSelectTypeColor] = useState({})
     const [selColor, setSelColor] = useState({
          id: uuidv4(),
          name: "red",
          color: "#fff"
     })
     const typingTimeoutRef = useRef(null);


     // xử lý mapStateToProps
     const color = useSelector(selectColor);
     // xử lý mapDispatchToProps;
     const dispatch = useDispatch();
     useEffect(() => {
          setColors(Colors);
          dispatch(getColorRequest());
     }, [selectTypeColor])
     const handleChageColor = (index, item) => {
          setCurrentColor(index);
          dispatch(putColorRequest(item))
     }
     const body = document.querySelector("body");
     const handleClickChange = (e) => {
          setStatus(state => !state);
          if (body) {
               body.classList.toggle("hidden");
          }
     }
     const handleClose = () => {
          setStatus(false);
          body.classList.remove("hidden");
     }
     const handleChangeInput = event => {
          const { value } = event.target;
          if (typingTimeoutRef.current) {
               clearTimeout(typingTimeoutRef.current)
          }
          typingTimeoutRef.current = setTimeout(() => {
               const color = {
                    id: uuidv4,
                    name: value,
                    color: "#fff"
               }
               setSelectTypeColor(color);
               if (value) {
                    dispatch(putColorRequest(selectTypeColor))
               }
          }, 200)
     }

     return (
          <ChangeColorWrapper
               className="setting-color"
               color={color.name}
               status={status}

          >
               <span
                    className="icon-color"
                    onClick={() => handleClickChange()}
               >
                    <FontAwesomeIcon icon={faCog} />
               </span>
               <div className="color-content">

                    <span
                         className="icon-close"
                         onClick={handleClose}
                    >
                         <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <h3 className="title">
                         Setting Color
                    </h3>
                    <p className="color-text">
                         Color:
                         <span className="current-color"></span>
                    </p>

                    <ul className="list-color">
                         {colors.map((item, index) => {
                              return !item.type ? <ColorItem
                                   colorItem={item}
                                   key={item.id}
                                   active={color.name === item.name}
                                   onClick={() => handleChageColor(index, item)}
                              /> : <li style={{ width: "100%" }}>
                                   <Color type={item.type} value={selColor.name} name="color" nameLabel="Custom color" id="color" onChange={handleChangeInput} />
                                   <span className="color">

                                   </span>
                              </li>
                         })}
                    </ul>
               </div>
          </ChangeColorWrapper>
     );
}

ColorItem.propTypes = {
     colorItem: PropTypes.object,
     active: PropTypes.bool,
     onClick: PropTypes.func
}

export default memo(ChangeColor);
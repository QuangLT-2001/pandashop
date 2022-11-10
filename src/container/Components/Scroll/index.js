import React, { useEffect, useState } from 'react';
import { ScrollWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { selectColor } from "./selector";
import PropTypes from "prop-types";

const Scroll = ({color}) => {
     const [scrollToTop, setScrollToTop] = useState(false);
     const hideScrollTo = () => {
          setScrollToTop(window.scrollY > 100);
     }
     useEffect(() => {
          window.addEventListener("scroll", hideScrollTo)
          return () => {
               window.removeEventListener("scroll", hideScrollTo)
          }
     }, [])
     if(!scrollToTop) return null;
     const handleClickToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: "smooth"
          })
     }
     return(
          <>
               {scrollToTop ? <ScrollWrapper
               onClick={handleClickToTop}
               color={color}
               >
                    <FontAwesomeIcon icon={faArrowUp}/>
          </ScrollWrapper> : ""}
          </>
     );
}
const mapStateToProps = state => {
     return{
          color: selectColor(state)
     }
}
Scroll.propTypes = {
     color: PropTypes.object
}

export default connect(mapStateToProps) (Scroll);
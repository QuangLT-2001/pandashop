import axios from "axios";
import React, {createContext, useState} from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const ThemeColor = createContext();
const ThemeProvider = ({children}) => {
     const [stateColor, setStateColor] = useState({});
     useEffect(() => {

     }, [])
     return(
          <ThemeColor.Provider value={{stateColor, setStateColor}}>
               {children}
          </ThemeColor.Provider>
     );
}

ThemeColor.propTypes = {
     children: PropTypes.object
}

export {ThemeColor, ThemeProvider};
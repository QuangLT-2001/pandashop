import React from 'react';
import "./style.css"
const Loading = props => {
  return (
    <div className="loading" style={{
      width: "100%",
      height: "100vh",
      overflow: 'hidden',
      position: "relative"
    }}>
      <div class="cascade">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loading;
import React, { useState } from 'react';
import "./Toggle.css"
import sun from "../img/sun.png"
import moon from "../img/moon.png"


export default function Toggle({toggleTheme}) {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = ()=>{
        setIsToggled(!isToggled);
        toggleTheme();
    }
    
  return (
      <div className="t">
          <img src= {sun} alt="" className="t-icon" />
          <img src={moon} alt="" className="t-icon" />
          <div className="t-button" checked={isToggled} onClick={handleClick} style={{left: isToggled ? 25 :0}} ></div>
      </div>
  ) 
}
//     onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}
import React from 'react'
import "./LogoSearch.css"
import Logo from "../../img/logo3.png"
// import {UilSearch} from "@iconscout/react-unicons"

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} style={{width:"18%"}} alt="" />
      <h1 style={{color:"#f9a225"}}>Hike</h1>
      {/* <div className="Search"> */}
        {/* <input type="text" placeholder="#Explore"/> */}
        {/* <div className="s-icon"> */}
          {/* <UilSearch/> */}
        </div>
      // </div>
    // </div>
  )
}

export default LogoSearch
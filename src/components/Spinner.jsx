import React from 'react';
import loadingLight from './Images/loading-light.gif';
import loadingDark from './Images/loading-dark.gif';
import reactSpinner from './Images/react.svg'
import "./CSS/Spinner.css"

export default function Spinner(props) {
  return (
    <div style={{height:'35vh', display:'flex', justifyContent:'center', alignItems:'flex-end'}} >
        <div className="spinner" style={{}}>
          <img src={reactSpinner}  className="logo react" alt={props.mode==='light'?loadingLight:loadingDark} />
        </div>
    </div>
  )
}
import React from 'react'
import { useState } from 'react'
import './ColorCard.css'



export default function ColorCard(props) {


      
    return (
    <div className="colorNames" onClick={()=>props.changeBackground(props.bgColor)} >
        {props.title[0].toUpperCase()+props.title.slice(1,)}  
        {/* //// to capitalize first letter */}
    </div>
  )
}

import React from "react";
import "../App.css"

const NasaCard = props => {
   return (
        <div>
            <h2>Photo: {props.title}</h2>
            <p>Date {props.date}</p>
            <div className = "picDiv">
             <img alt = "NASA pic of the day" src = {props.pic}/> 
            </div>     
          
           <p>{props.info}</p>
        </div>

   )

}

export default NasaCard;
import React from "react";

const NasaCard = props => {
   return (
        <div>
            <h2>Photo: {props.title}</h2>
            <p>Date {props.date}</p>
            <img alt = "NASA pic of the day" src = {props.pic}/> 
           <p>{props.info}</p>
        </div>

   )

}

export default NasaCard;
import React from "react";


const NASA = (props)=>{

    return(
        <div>
            <h3>Nasa Component</h3>
            <p>{props.nasaData.date}</p>
            <img src={props.nasaData.hdurl}/>
            <p>Explain</p>
        </div>
    )


};

export default NASA
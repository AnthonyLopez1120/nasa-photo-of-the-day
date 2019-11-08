import React from "react";
import "../App.css"
import styled from "styled-components"

const Img = styled.img`
   max-width: 50%
`
const MainDiv = styled.div`
   max-width: 80%;
   max-height: 80%;
   background: grey;
   margin: 0%, 15%;
      h2{
         font-size:2.5rem;
         background: blue;
      }
`

const NasaCard = props => {
   return (
      <MainDiv>

            <h2>Photo: {props.title}</h2>
            <p>Date {props.date}</p>
           
                 
             <Img alt = "NASA pic of the day" src = {props.pic}/> 
        
          
          
           <p>{props.info}</p>
      </MainDiv>
   )

}

export default NasaCard;
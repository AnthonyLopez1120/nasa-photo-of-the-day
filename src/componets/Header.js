import React from "react";
import styled from "styled-components"
const HeaderTag = styled.header`
    background: black;
    height:10%;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
        h1{
            color:white;
            font-size: 2;
            width:100%;
        }
    
        a{
            color:white;
            font-size:1.8rem;
            display:flex;
            width: 25%;
            text-decoration: none;
            padding: 2% 0;
            text-align:center;
            align-items: center;
        }
`

const Header = ()=>{

    return(
        <> 
        <HeaderTag>
            <h1>NASA PHOTO OF THE DAY</h1>
            <a href = "home">Home</a>
            <a href = "about">About</a>
            <a href = "contact">Contact</a>
        </HeaderTag>

        </>
    )
}

export default Header
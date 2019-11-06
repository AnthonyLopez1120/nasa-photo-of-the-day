import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

const NasaData = ()=>{
    const [photo, setPhoto] = useState("")

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res =>{
            console.log(res)
            setPhoto(res.data.url)
        })
        .catch(err =>{
            console.log('errooooooor')
        })
    },[])
    return (
    <div>

    </div>
   )
}

export default NasaData;
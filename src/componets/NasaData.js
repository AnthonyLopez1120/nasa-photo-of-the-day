import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

const NasaData = ()=>{
    const [photo, setPhoto] = useState([])
    const [title, setTitle] = useState([])
    const [date, setDate] = useState([])
    const [info, setInfo] = useState([])

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res =>{
            console.log(res)
            setPhoto(res.data.url)
            setTitle(res.data.title)
            setDate(res.data.date)
            setInfo(res.data.explanation)
        })
        .catch(err =>{
            console.log('errooooooor')
        })
    },[])
    return (
    <div>
        <NasaCard 
            pic = {photo}
            date = {date}
            title = {title} 
            info = {info}       
        />

    </div>
   )
}

export default NasaData;
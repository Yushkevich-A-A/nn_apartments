import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

interface data {
    address:string,
    title:string,
    description:string
}

export default function ApartamentsText(){
    const[data, setData] = useState({} as data)
    const {id} = useParams()
    
    useEffect(() => {
        fetch('http://localhost:8000/api/apartments/'+id+'/')
        .then(response => response.json())
        .then(data => setData(data))
    },[id])

    

    return(
        <div className="apartaments-text">
            <p className="apartaments-text__head">{data.title}</p>
            <p className="apartaments-text__adress">{data.address}</p>
            <div className="apartaments-text__about">
                {data.description}
            </div>
        </div>
    )
}
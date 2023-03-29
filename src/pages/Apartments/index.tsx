import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { WidthWrapperPage } from "shared/components/WidthWrapperPage";
import ApartamentsText from "widgets/ApartamentsText";
import PageNav from "widgets/PageNav";
import './style.scss'

export default function Apartments(){

    const [apartamentsList, setList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/apartments/')
            .then(response => response.json())
            .then(data => setList(data))
    },[])


    return(
        <section className="apartaments">
            <WidthWrapperPage >
                <PageNav data = {apartamentsList}/>
                <Routes>
                    {apartamentsList.map((element:any) => 
                    {
                        return(
                            <Route 
                                key = {element.id}  
                                path = {':id'} 
                                element = {<ApartamentsText/>}
                            />
                        )
                    }
                        
                    )}
                </Routes>
            </WidthWrapperPage>
        </section>
    )
}
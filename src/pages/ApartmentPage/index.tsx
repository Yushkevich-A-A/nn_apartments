import { Route, Routes } from "react-router-dom";
import PageNav from "widgets/PageNav";
import './style.scss'
import { Apartment } from "widgets/Apartment";

export default function ApartmentPage(){

    return(
        <section className="apartament-page">
            {/* <PageNav/> */}
            <Apartment/>
        </section>
    )
}
import { Route, Routes } from "react-router-dom";
import { WidthWrapperPage } from "shared/components/WidthWrapperPage";
import Appartment from "widgets/Appartment";
import PageNav from "widgets/PageNav";
import './style.scss'

export default function ApartmentPage(){

    return(
        <section className="apartaments">
            <WidthWrapperPage >
                <PageNav/>
                <Appartment/>
            </WidthWrapperPage>
        </section>
    )
}
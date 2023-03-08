import { Route, Routes } from "react-router-dom";
import { WidthWrapperPage } from "shared/components/WidthWrapperPage";
import ApartamentsText from "widgets/ApartamentsText";
import PageNav from "widgets/PageNav";
import './style.scss'

export default function Apartments(){

    const pageList = [
        'Дом у реки',
        'Фарфор и соловей',
        'Апартаменты на Грузинской',
        'Дом купца Переплетчикова'
    ]

    return(
        <section className="apartaments">
            <WidthWrapperPage >
                <PageNav/>
                <Routes>
                    {pageList.map((element,index) => 
                        <Route key = {element}  path = {'/'+index} element = {<ApartamentsText text = {element}/>}></Route>
                    )}
                </Routes>
            </WidthWrapperPage>
        </section>
    )
}
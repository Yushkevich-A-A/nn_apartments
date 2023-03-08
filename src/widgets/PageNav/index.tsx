import { NavLink } from 'react-router-dom'
import './style.scss'

export default function PageNav(){
    const pageList = [
        'Дом у реки',
        'Фарфор и соловей',
        'Апартаменты на Грузинской',
        'Дом купца Переплетчикова'
    ]

    return(
        <ul className="page-nav">
            {pageList.map((e,index) => 
                <li className='page-nav__element' key={e}>
                    <NavLink className='page-nav__link' to = {"/"+index}>{e}</NavLink>
                </li>)}
        </ul>
    )
}
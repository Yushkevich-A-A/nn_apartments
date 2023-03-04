import { Link } from 'react-router-dom'
import './style.scss'

export default function PageNav(){
    const pageList = [
        'Дом у реки',
        'Фарфор и соловей',
        'Апартаменты на Грузинском',
        'Дом купца Переплетчикова'
    ]

    return(
        <ul className="page-nav">
            {pageList.map(e => <li className='page-nav__element' key={e}><Link to = '/'>{e}</Link></li>)}
        </ul>
    )
}
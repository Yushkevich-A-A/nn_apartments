import { NavLink } from 'react-router-dom'
import './style.scss'

export default function PageNav(props:any){
    const pageList = props.data

    return(
        <ul className="page-nav">
            {pageList.map((e:any) => 
                <li className='page-nav__element' key={e.id}>
                    <NavLink className='page-nav__link' to = {'/'+e.id}>{e.name}</NavLink>
                </li>)}
        </ul>
    )
}
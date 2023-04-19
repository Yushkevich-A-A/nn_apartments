import { NavLink } from 'react-router-dom'
import './style.scss'
import { useApartmentStore } from 'store/useApartmentStore'
import { IApartmentModel } from 'shared/types';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';
import cn from 'classnames';

export const PageNav: React.FC = () => {
    const { apartments, selectedAppartment, selectApartment } = useApartmentStore();

    return (
        <WidthWrapperPage>
            <ul className="page-nav">
                {
                    apartments.map((e: IApartmentModel) => <li className='page-nav__element' key={e.id}>
                            <div 
                            className={cn('page-nav__link', selectedAppartment === e.id && 'selected-apartment')}
                            onClick={() => selectApartment(e.id)}
                            >{e.name}</div>
                        </li>)
                }
            </ul>
        </WidthWrapperPage>
    )
}
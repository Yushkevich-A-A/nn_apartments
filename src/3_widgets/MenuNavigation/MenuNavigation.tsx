import styles from './PageNav.module.scss';
import { useApartmentStore } from 'store/useApartmentStore';
import { IApartmentModel } from '6_shared/types';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage/WidthWrapperPage';
import cn from 'classnames';
import axios from 'axios';
import { useOrderSelect } from 'store/useOrderSelect';

export const MenuNavigation: React.FC = () => {
	const { resetState } = useOrderSelect();
	const { apartments, selectedAppartment, setServedDates, selectApartment } = useApartmentStore();

	const handleClick = (id: number) => {
		axios.get(`${process.env.REACT_APP_BASE_URL}/api/dates/${id}/`).then((dates) => {
			if (dates.data) {
				setServedDates(dates.data[0].dates ? dates.data[0].dates : []);
			}
			selectApartment(id);
			resetState();
		});
	};

	return (
		<WidthWrapperPage>
			<ul className={styles['page-nav']}>
				{apartments.map((e: IApartmentModel) => (
					<li className={styles['page-nav__element']} key={e.id}>
						<div
							className={cn(
								styles['page-nav__link'],
								selectedAppartment === e.id && styles['selected-apartment'],
							)}
							onClick={(): void => handleClick(e.id)}
						>
							{e.name}
						</div>
					</li>
				))}
			</ul>
		</WidthWrapperPage>
	);
};

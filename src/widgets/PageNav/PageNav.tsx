import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import { useApartmentStore } from 'store/useApartmentStore';
import { IApartmentModel } from 'shared/types';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';
import cn from 'classnames';

export const PageNav: React.FC = () => {
	const { apartments, selectedAppartment, selectApartment } = useApartmentStore();

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
							onClick={(): void => selectApartment(e.id)}
						>
							{e.name}
						</div>
					</li>
				))}
			</ul>
		</WidthWrapperPage>
	);
};

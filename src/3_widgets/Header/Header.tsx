import { HeaderSlider } from '3_widgets/HeaderSlider';
import Logo from '6_shared/components/Logo';
import styles from './Header.module.scss';
import { GreenButton } from '6_shared/components/GreenButton';
import cn from 'classnames';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage';
import { useEffect, useState } from 'react';
import { Phone } from '6_shared/components/MetaLinks/Phone/Phone';

export function Header(): JSX.Element {
	const handleClick = () => {
		const element = document.getElementById('order-section');
		if (element === null) {
			return;
		}
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<header className={styles['header']}>
			<div className={styles['slider_wrapper']}>
				<HeaderSlider />
			</div>
			<div className={styles['header_wrapper']}>
				<WidthWrapperPage>
					<div className={styles['header_container']}>
						<Logo />
						<Phone phone="+79107984696">+7 910 798-46-96</Phone>
					</div>
					<div className={styles['header-title']}>
						<div className={styles['rating']}>Оценка 9.8 на booking </div>
						<div className={styles['main-title']}>Аренда апартаментов в Нижнем Новгороде</div>
						<div className={styles['subtitle']}>
							Безусловно, глубокий уровень погружения напрямую
							<span className={styles['subtitle-bold']}>
								зависит от укрепления моральных ценностей.
							</span>
						</div>
						<div className={styles['btn-serve']}>
							<GreenButton title="Забронировать" handleClick={() => handleClick()} />
						</div>
					</div>
				</WidthWrapperPage>
			</div>
		</header>
	);
}

import { HeaderSlider } from 'widgets/HeaderSlider';
import Logo from 'shared/components/Logo';
import styles from './Header.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import cn from 'classnames';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';

export function Header(): JSX.Element {
	return (
		<header className={styles['header']}>
			<div className={styles['slider_wrapper']}>
				<HeaderSlider />
			</div>
			<div className={styles['header_wrapper']}>
				<WidthWrapperPage>
					<div className={styles['header_container']}>
						<Logo />
						<p className={cn(styles['header__phone'], styles['flexible-center'])}>
							+7(910)999-99-99
						</p>
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
							<GreenButton title="Забронировать" />
						</div>
					</div>
				</WidthWrapperPage>
			</div>
		</header>
	);
}

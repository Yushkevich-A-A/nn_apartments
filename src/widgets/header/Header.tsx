import { HeaderSlider } from 'widgets/HeaderSlider';
import Logo from 'shared/Logo';
import './style.scss';

export function Header() {
	return (
		<header className="header">
			<HeaderSlider />
			<div className="header_wrapper">
				<div className="header_container">
					<Logo />
					<p className="header__phone flexible-center">+7 910 999-99-99</p>
				</div>
			</div>
		</header>
	);
}

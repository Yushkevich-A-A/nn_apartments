import './style.scss';
import logo from './assets/logo.svg';

export const Logo = () => {
	return (
		<div className="logo">
			<img src={logo} alt="" />
		</div>
	);
};

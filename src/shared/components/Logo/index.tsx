import './style.scss';
import logo from './assets/logo.svg';

export default function Logo() {
	return (
		<div className="logo">
			<object data={logo} />
		</div>
	);
}

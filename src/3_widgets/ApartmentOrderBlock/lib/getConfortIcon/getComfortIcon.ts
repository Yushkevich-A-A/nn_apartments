import security from './assert/key.svg';
import park from './assert/park.svg';
import towel from './assert/towel.svg';
import tv from './assert/tv.svg';
import furniture from './assert/wash.svg';
import view from './assert/view.svg';
import bathhouse from './assert/bathhouse.svg';
import entrance from './assert/entrance.svg';
import tea_coffee from './assert/tea.svg';
import wifi from './assert/wifi.svg';

export const getComfortIcon = (type: string) => {
	// debugger;
	switch (type) {
		case 'wi-fi':
			return wifi;
		case 'parking':
			return park;
		case 'TV':
			return tv;
		case 'appliances':
			return furniture;
		case 'linens':
			return towel;
		case 'key':
			return security;
		case 'view':
			return view;
		case 'bathhouse':
			return bathhouse;
		case 'entrance':
			return entrance;
		case 'tea/coffee':
			return tea_coffee;
		default:
			return null;
	}
};

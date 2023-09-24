export interface IDetailedCharacteristic {
	name: string;
	data: string | number;
}
export interface IComfort {
	type: string;
	description: string;
}

export interface IApartmentModel {
	id: number;
	images: string[];
	detailedCharacteristic: IDetailedCharacteristic[];
	comfort: IComfort[];
	location: {
		url: string;
		desc: string[];
	};
	name: string;
	title: string;
	address: string;
	description: string;
	shortCharacteristic: string[];
	price: number;
	capacity: number;
}

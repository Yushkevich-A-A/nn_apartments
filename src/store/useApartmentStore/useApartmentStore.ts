import { IApartmentModel } from 'shared/types';
import { create } from 'zustand';

export interface IUseApartmentStore {
	apartments: IApartmentModel[];
	selectedAppartment: null | number;
	servedDates: string[];
	addApartments: (payload: IApartmentModel[]) => void;
	getApartment: (id: number) => IApartmentModel | undefined;
	selectApartment: (id: number) => void;
	setServedDates: (payload: string[]) => void;
}

const useApartmentStore = create<IUseApartmentStore>()((set, get) => ({
	apartments: [],
	servedDates: [],
	selectedAppartment: null,
	addApartments: (payload: IApartmentModel[]) => {
		set(() => ({ apartments: [...payload] }));
	},
	setServedDates: (payload: string[]) => {
		set(() => ({ servedDates: [...payload] }));
	},
	getApartment: (id: number) => {
		return get().apartments.find((apartment: IApartmentModel) => apartment.id === id);
	},
	selectApartment: (id: number) => {
		set(() => ({ selectedAppartment: id }));
	},
}));

export { useApartmentStore };

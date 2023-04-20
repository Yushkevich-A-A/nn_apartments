import { IApartmentModel } from 'shared/types';
import { create } from 'zustand';

export interface IUseApartmentStore {
	apartments: IApartmentModel[];
	selectedAppartment: null | number;
	addApartments: (payload: IApartmentModel[]) => void;
	getApartment: (id: number) => IApartmentModel | undefined;
	selectApartment: (id: number) => void;
}

const useApartmentStore = create<IUseApartmentStore>()((set, get) => ({
	apartments: [],
	selectedAppartment: null,
	addApartments: (payload: IApartmentModel[]) => {
		set(() => ({ apartments: [...payload] }));
	},
	getApartment: (id: number) => {
		return get().apartments.find((apartment: IApartmentModel) => apartment.id === id);
	},
	selectApartment: (id: number) => {
		set(() => ({ selectedAppartment: id }));
	},
}));

export { useApartmentStore };

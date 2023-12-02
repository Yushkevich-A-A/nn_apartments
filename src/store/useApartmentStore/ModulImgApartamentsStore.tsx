// import { IApartmentModel } from '6_shared/types';
// import { create } from 'zustand';

// export interface ModulApartmentStore {

// }

// const ModulImgApartamentsStore = create<ModulApartmentStore>()((set, get) => ({
// 	apartments: [],
// 	servedDates: [],
// 	selectedAppartment: null,
// 	addApartments: (payload: IApartmentModel[]) => {
// 		set(() => ({ apartments: [...payload] }));
// 	},
// 	setServedDates: (payload: string[]) => {
// 		set(() => ({ servedDates: [...payload] }));
// 	},
// 	getApartment: (id: number) => {
// 		return get().apartments.find((apartment: IApartmentModel) => apartment.id === id);
// 	},
// 	selectApartment: (id: number) => {
// 		set(() => ({ selectedAppartment: id }));
// 	},
// }));

export {};

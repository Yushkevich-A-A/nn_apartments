import { IApartmentModel } from 'shared/types';
import { create } from 'zustand';

export interface IUseApartmentStore {
  apartments: any[];
  selectedAppartment: null | number,
  addApartments: (payload: IApartmentModel[]) => void;
  getApartment: (id: number) => IApartmentModel
}

const useApartmentStore = create<IUseApartmentStore>()((set, get) => ({
  apartments: [],
  selectedAppartment: null,
  addApartments: (payload: IApartmentModel[]) => {
    set(( )=> ({ apartments: [...payload] }))
    },
  getApartment: (id: number) => {
    return get().apartments.find( apartment => apartment === id );
  },
}));

export { useApartmentStore };
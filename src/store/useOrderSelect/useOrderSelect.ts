import { IApartmentModel } from 'shared/types';
import { create } from 'zustand';

export interface IInitState {
	dateFrom: number | null;
	dateTo: number | null;
	name: string;
	phone: string;
	email: string;
	guests: {
		adult: number;
		children: number;
		baby: number;
	};
	apartment: number | null;
}

export interface IUseOrderSelect {
	selectedParameters: IInitState;
	setOrderParameter: (payload: Partial<IInitState>) => void;
	resetState: () => void;
}

const initState: IInitState = {
	dateFrom: null,
	dateTo: null,
	name: '',
	phone: '',
	email: '',
	guests: {
		adult: 1,
		children: 0,
		baby: 0,
	},
	apartment: null,
};

const useOrderSelect = create<IUseOrderSelect>()((set) => ({
	selectedParameters: {
		...initState,
	},
	setOrderParameter: (payload: Partial<IInitState>): void => {
		return set((state) => ({
			selectedParameters: {
				...state.selectedParameters,
				...payload,
			},
		}));
	},
	resetState: (): void => {
		return set(() => ({
			selectedParameters: { ...initState },
		}));
	},
}));

export { useOrderSelect };

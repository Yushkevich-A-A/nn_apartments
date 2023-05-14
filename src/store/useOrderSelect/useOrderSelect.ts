import { addDays, format, parse } from 'date-fns';
import { IApartmentModel } from 'shared/types';
import { create } from 'zustand';

export interface IInitState {
	date: {
		start: Date;
		end: Date;
	};
	crossDates: string[];
	name: string | null;
	phone: string | null;
	email: string | null;
	guests: {
		adult: number;
		children: number;
	};
	apartment: number | null;
}

export interface IUseOrderSelect {
	selectedParameters: IInitState;
	setOrderParameter: (payload: Partial<IInitState>) => void;
	resetState: () => void;
}

const initState: IInitState = {
	date: {
		start: parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
		end: addDays(parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()), 1),
	},
	crossDates: [],
	name: '',
	phone: '',
	email: '',
	guests: {
		adult: 1,
		children: 0,
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
	setDateParameter: (payload: Partial<IInitState>): void => {
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

import { addDays, format, parse } from 'date-fns';
import { IApartmentModel } from 'shared/types';
import { create } from 'zustand';

export interface IInitState {
	date: {
		start: Date;
		end: Date;
	};
	crossDates: boolean;
	guests: {
		adult: number;
		children: number;
	};
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
	crossDates: false,
	guests: {
		adult: 1,
		children: 0,
	},
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

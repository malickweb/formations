export type FilterState = {
    email: string;
};

export type FilterAction = { type: 'SET_EMAIL'; payload: string } | { type: 'RESET' };

export const initialFilterState: FilterState = {
    email: '',
};

export function filterReducer(state: FilterState, action: FilterAction): FilterState {
    switch (action.type) {
        case 'SET_EMAIL':
            console.log('INPUT action ', action.payload);
            return { ...state, email: action.payload };
        case 'RESET':
            return initialFilterState;
        default:
            return state;
    }
}

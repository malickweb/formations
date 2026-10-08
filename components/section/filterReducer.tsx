// Types
export type Levels = 'All' | 'Débutant' | 'Intermédiaire' | 'Avancé';

export type FilterState = {
    level: 'All' | 'Débutant' | 'Intermédiaire' | 'Avancé';
    langage: 'All' | 'react' | 'angular' | 'nodejs';
};

export type FilterAction =
    | { type: 'SET_LEVEL'; payload: 'All' | 'Débutant' | 'Intermédiaire' | 'Avancé' }
    | { type: 'SET_LANGAGE'; payload: 'All' | 'react' | 'angular' | 'nodejs' }
    | {
          type: 'RESET';
      };

export const initialFilterState: FilterState = {
    level: 'All',
    langage: 'All',
};

export function filterReducer(state: FilterState, action: FilterAction): FilterState {
    switch (action.type) {
        case 'SET_LEVEL':
            console.log('action ', action.payload);
            return { ...state, level: action.payload };
        case 'SET_LANGAGE':
            console.log('action ', action.payload);
            return { ...state, langage: action.payload };

        case 'RESET':
            return initialFilterState;

        default:
            return state;
    }
}

export type FormAction = { type: 'SET_NAME'; payload: string } | { type: 'SET_EMAIL'; payload: string } | { type: 'SET_PASSWORD'; payload: string } | { type: 'RESET' };

export type FormSignUpState = {
    name: string;
    email: string;
    password: string;
};
export type FormSignInState = {
    email: string;
    password: string;
};
// S'inscrire
export const initialSignUpState = {
    name: '',
    email: '',
    password: '',
};
// S'identifier
export const initialSignInState = {
    email: '',
    password: '',
};

export function formSignUpReducer(state: FormSignUpState, action: FormAction): FormSignUpState {
    switch (action.type) {
        case 'SET_NAME':
            console.log('NAME FORM ', action.payload);
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            console.log('EMAIL FORM ', action.payload);
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            console.log('PASSWORD FORM ', action.payload);
            return { ...state, password: action.payload };
        case 'RESET':
            return initialSignUpState;

        default:
            return state;
    }
}

export function formSignInReducer(state: FormSignInState, action: FormAction): FormSignInState {
    switch (action.type) {
        case 'SET_EMAIL':
            console.log('EMAIL FORM ', action.payload);
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            console.log('PASSWORD FORM ', action.payload);
            return { ...state, password: action.payload };
        case 'RESET':
            return initialSignInState;

        default:
            return state;
    }
}

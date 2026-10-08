import { useReducer } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import { formSignInReducer, initialSignUpState } from './formReducer';
export default function SignIn() {
    const [formSignIn, dispatch] = useReducer(formSignInReducer, initialSignUpState);
    return (
        <>
            <form className={`w-1/2 m-auto`}>
                <h3>S'identifier</h3>
                <div className={`flex`}>
                    <Input
                        type={`email`}
                        name={`emailForm`}
                        value={formSignIn.email}
                        placeholder={`Email`}
                        className={`border border-gray-800 rounded-md px-3 py-2`}
                        onChange={(e) => {
                            dispatch({ type: 'SET_EMAIL', payload: e.target.value as string });
                        }}
                    />
                </div>
                <div className={`flex`}>
                    <Input
                        type={`password`}
                        name={`passwordForm`}
                        value={formSignIn.password}
                        placeholder={`Password`}
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value as string })}
                    />
                </div>
                <div className={`flex text-center justify-center `}>
                    <Button className={`border border-gray-700 rounded-2xl hover:text-gray-600`}>OK</Button>
                </div>
            </form>
        </>
    );
}

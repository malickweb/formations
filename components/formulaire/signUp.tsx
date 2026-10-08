import { useReducer } from 'react';
// Components
import Input from '../input/input';
import Button from '../button/button';
// Hook
import { formSignUpReducer, initialSignUpState } from './formReducer';

export default function SignUp() {
    const [formSignUp, dispatch] = useReducer(formSignUpReducer, initialSignUpState);

    return (
        <>
            <form className={`w-1/2 m-auto`}>
                <h3>S'enregistrer</h3>
                <div className={`flex`}>
                    <Input
                        type={`text`}
                        name={`firstnameForm`}
                        value={formSignUp.name}
                        placeholder={`Votre Prénom`}
                        label={`Prénom`}
                        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value as string })}
                    />
                </div>
                <div className={`flex`}>
                    <Input
                        type={`email`}
                        name={`emailForm`}
                        value={formSignUp.email}
                        placeholder={`Votre email`}
                        label={`Email`}
                        onChange={(e) => {
                            dispatch({ type: 'SET_EMAIL', payload: e.target.value as string });
                        }}
                    />
                </div>
                <div className={`flex`}>
                    <Input
                        type={`password`}
                        name={`passwordForm`}
                        value={formSignUp.password}
                        placeholder={`Votre password`}
                        label={`Password`}
                        onChange={(e) => {
                            dispatch({ type: 'SET_PASSWORD', payload: e.target.value as string });
                        }}
                    />
                </div>
                <div className={`flex text-center justify-center`}>
                    <Button className={`border border-gray-700 rounded-2xl hover:text-gray-600`}>OK</Button>
                </div>
            </form>
        </>
    );
}

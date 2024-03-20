import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import { BiLoaderCircle } from "react-icons/bi";
import useCheckUserByCreds from '../hooks/useCheckUserByCreds';

import { login, logout } from '../actions'


export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [shouldFetch,setShouldFetch] = useState(false);

    const showError = () => {
        if (error && error.type === 'string' && error.message.length > 0) {
            return error.message
        }
        return '';
    }

    const handleLogin = async () => {
        try {
            let msg = await login(email, password);
            console.log(msg);
           
            
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
            alert(error)
        }
        
        
    }

    const handleLogout = async () => {
        try {
            await logout();   
        }
        catch (error) {
            throw error;
        }
    }



  

    return (

        <div>
            <h1 className="text-center text-3xl mb-4 font-bold">Log in</h1>
            <div className="px-6 pb-2">
                <TextInput
                    string={email}
                    placeholder='Email address'
                    onUpdate={setEmail}
                    inputType='email'
                    error={showError('email')} />
            </div>
            <div className="px-6 pb-2">
                <TextInput
                    string={password}
                    placeholder='Password'
                    onUpdate={setPassword}
                    inputType='password'
                    error={showError('password')} />

            </div>

            <div className="px-6 pb-2 mt-6">
                <button

                    onClick={() => handleLogin()}
                    disabled={isLoading || !email || !password}
                    className={`flex items-center justify-center w-full text-lg fomt-semibold text-white py-3 rounded-sm ${(isLoading || !email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'}`}>
                    {isLoading ? (
                        <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
                    ) : (
                        'Log in'
                    )}
                </button>
                <button

                    onClick={() => handleLogout()}
                    disabled={isLoading || !email || !password}
                    className={`flex items-center mt-6 justify-center w-full text-lg fomt-semibold text-white py-3 rounded-sm ${(isLoading || !email || !password) ? 'bg-gray-200' : 'bg-[#4d38c5]'}`}>
                    {isLoading ? (
                        <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} />
                    ) : (
                        'Log out'
                    )}
                </button>
            </div>
        </div>

    )

}
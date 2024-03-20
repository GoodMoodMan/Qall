import { useRouter } from "next/navigation";
import { useState } from "react";
import TextInput from "./TextInput";
import { BiLoaderCircle } from "react-icons/bi";

export default function Register() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const showError = () => {
        if (error && error.type === 'string' && error.message.length > 0) {
            return error.message
        }
        return '';
    }

    const register = () => {
        console.log('register');
    }

    return (
        <>
            <div>
                <h1 className="text-center text-3xl mb-4 font-bold">Register</h1>
                <div className="px-6 pb-2">
                    <TextInput
                        string={username}
                        placeholder='Username'
                        onUpdate={setUsername}
                        inputType='username'
                        error={showError('username')}/>

                </div>
                
                <div className="px-6 pb-2">
                    <TextInput
                        string={email}
                        placeholder='Email address'
                        onUpdate={setEmail}
                        inputType='email'
                        error={showError('email')}/>

                </div>

                <div className="px-6 pb-2">
                    <TextInput
                        string={password}
                        placeholder='Password'
                        onUpdate={setPassword}
                        inputType='password'
                        error={showError('password')}/>

                </div>

                <div className="px-6 pb-2">
                    <TextInput
                        string={confirmPassword}
                        placeholder='Confirm Password'
                        onUpdate={setConfirmPassword}
                        inputType='password'
                        error={showError('confirmPassword')}/>

                </div>
              

                <div className="px-6 pb-2 mt-6">
                    <button disabled={isLoading}
                    onClick={() => register()}
                    className={`flex items-center justify-center w-full text-lg fomt-semibold text-white py-3
                    rounded-sm ${(!username || !email || !password || !confirmPassword) ? 'bg-gray-200' : 'bg-[#F02C56]'}`}>
                        {isLoading ? (
                            <BiLoaderCircle className="animate-spin" color="#ffffff" size={25}/>

                        ) : (
                            'Register'
                        )}

                    </button>
                

                </div>


            </div>
        </>
    )

}
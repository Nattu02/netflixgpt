import { BG_URL } from '../utils/urls'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false)

    const toggleSignup = () => {
        setIsSignUp(!isSignUp)
    }

    

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_URL})` }}
        >
            <Header />
            <div className="flex flex-col items-center w-2/7 mx-auto bg-[rgba(0,0,0,0.7)] text-white">
                <form className="flex flex-col w-4/5 my-10">
                    <h1 className="font-bold text-4xl my-5">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </h1>
                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Username"
                            className="p-4 my-2 border-2 border-gray-200 rounded-md"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Email address"
                        className="p-4 my-2 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-4 my-2 border-2 border-gray-200 rounded-md"
                    />
                    <button className="p-3 my-5 w-full bg-red-600 rounded-md  text-xl font-bold hover:bg-red-500">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                    <p className="p-3 my-1 font-bold underline">
                        {!isSignUp && 'Forgot password?'}
                    </p>
                    {isSignUp ? (
                        <h1 className="p-3 my-1">
                            Already a user?{' '}
                            <span
                                className="font-bold underline cursor-pointer"
                                onClick={toggleSignup}
                            >
                                Sign In
                            </span>
                        </h1>
                    ) : (
                        <h1 className="p-3 my-1">
                            New to Netflix?{' '}
                            <span
                                className="font-bold underline cursor-pointer"
                                onClick={toggleSignup}
                            >
                                Sign Up now.
                            </span>
                        </h1>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Login

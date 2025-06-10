import { BG_URL } from '../utils/urls'
import { validateDataSignIn, validateDataSignUp } from '../utils/validate'
import Header from './Header'
import { useRef, useState, useEffect } from 'react'
import { auth } from '../utils/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    useEffect(() => {
        if (name.current) name.current.value = ''
        if (email.current) email.current.value = ''
        if (password.current) password.current.value = ''
        setErrorMessage(null)
    }, [isSignUp])

    const handleValidation = () => {
        const message = isSignUp
            ? validateDataSignUp(
                  name.current.value,
                  email.current.value,
                  password.current.value
              )
            : validateDataSignIn(email.current.value, password.current.value)
        setErrorMessage(message)

        isSignUp ? handleSignUp() : handleSignIn()
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                setErrorMessage(errorCode + ' ' + errorMessage)
            })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                // const errorCode = error.code
                const errorMessage = error.message
                setErrorMessage(errorMessage)
            })
    }

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
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                    className="flex flex-col w-4/5 my-10"
                >
                    <h1 className="font-bold text-4xl my-5">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </h1>
                    {isSignUp && (
                        <input
                            ref={name}
                            type="text"
                            placeholder="Username"
                            className="p-4 my-2 border-2 border-gray-200 rounded-md"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email address"
                        className="p-4 my-2 border-2 border-gray-200 rounded-md"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-4 my-2 border-2 border-gray-200 rounded-md"
                    />
                    <p className="font-bold text-red-600">{errorMessage}</p>
                    <button
                        className="p-3 my-5 w-full bg-red-600 rounded-md  text-xl font-bold hover:bg-red-500"
                        onClick={handleValidation}
                    >
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

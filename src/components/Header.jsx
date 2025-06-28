import { LOGO_URL } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((store) => store.user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(
                    addUser({
                        uid: uid,
                        Email: email,
                        name: displayName,
                        photoURL: photoURL,
                    })
                )
                navigate('/browse')
            } else {
                dispatch(removeUser())
                navigate('/')
            }
        })

        // Unsubscribe when component unmounts
        return () => unsubscribe()
    }, [])

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser())
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="flex justify-between bg-gradient-to-b from-black fixed w-full z-10">
            <img src={LOGO_URL} alt="Logo" className="w-60 py-5 px-5 " />
            {user && (
                <div className="flex justify-between items-center mx-10 px-5">
                    <Link to={"/gptsearch"} className="mx-4 p-2 bg-red-600 font-bold text-white text-md cursor-pointer rounded-md">
                        GPT Search
                    </Link>
                    <div>
                        <h1 className="text-white text-lg font-bold">
                            Welcome {user?.name} 😍
                        </h1>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="mx-4 p-2 bg-red-600 font-bold text-white text-md cursor-pointer rounded-md"
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header

import { BG_URL } from '../utils/constants'
import Login from './Login'

const Body = () => {
    return (
        <div className="min-h-screen bg-cover bg-center">
            <img
                src={BG_URL}
                alt="Background image"
                className="h-screen object-cover md:w-screen absolute -z-10"
            />
            <Login />
        </div>
    )
}

export default Body

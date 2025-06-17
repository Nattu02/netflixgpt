import { BG_URL } from '../utils/constants'
import Login from './Login'

const Body = () => {
    return (
        <div className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_URL})` }}>
            <Login />
        </div>
    )
}

export default Body

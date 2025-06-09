import { LOGO_URL } from '../utils/urls'

const Header = () => {
    return (
        <div className='flex justify-between bg-gradient-to-b from-black'>
            <img src={LOGO_URL} alt="Logo" className='w-60 py-5 px-5 '/>
            {/* <button className='bg-red-600 my-auto mx-10 py-1 px-2 font-bold text-xl text-white rounded-lg cursor-pointer'>Sign In</button> */}
        </div>
    )
}

export default Header

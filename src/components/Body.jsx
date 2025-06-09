import { createBrowserRouter } from 'react-router'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { BG_URL } from '../utils/urls'

const Body = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: 'browse',
            element: <Browse />,
        },
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Body

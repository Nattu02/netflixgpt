import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Browse from './components/Browse'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
    const approuter = createBrowserRouter([
        {
            path: '/',
            element: <Body />,
        },
        {
            path: '/browse',
            element: <Browse />,
        },
    ])

    return (
        <div>
            <Provider store={appStore}>
                <RouterProvider router={approuter} />
            </Provider>
        </div>
    )
}

export default App

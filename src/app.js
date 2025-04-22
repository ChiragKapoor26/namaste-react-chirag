import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Restaurant_menu from "./components/Restaurant_menu"
const AppLayOut = () => {
    return (
        <div className="app h-screen w-screen overflow-x-hidden">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayOut/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:restid",
                element:<Restaurant_menu/>
            }
        ],
        errorElement:<Error/>
    }
])
// Creating the root
const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(<RouterProvider router={appRouter}/>);

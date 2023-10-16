import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Menu from "./components/ContactList"
import Contact from "./components/ContactForm"


const router = createBrowserRouter([
    {path :"/",
    element : <Menu />,
    children: [
        {
            path :"/",
            element : <App/>
        },
        {
            path :"/contact",
            element : <Contact/>
        }
    ]},
])


export default router
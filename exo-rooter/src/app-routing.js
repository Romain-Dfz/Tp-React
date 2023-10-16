import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./routes/ErrorPage"
import Form from "./routes/Form"
import Menu from "./routes/Menu"
import About from "./routes/about"
import Contact from "./routes/contact"


const router = createBrowserRouter([
    {path :"/",
    element : <Menu />,
    errorElement : <ErrorPage/>,
    children: [
        {
            path :"/",
            element : <App/>
        },
        {
            path :"/form",
            element : <Form/>
        },
        {
            path :"/about",
            element : <About/>
        },
        {
            path :"/contact",
            element : <Contact/>
        }
    ]},
])


export default router
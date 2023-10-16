import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Panier from "./routes/Panier"
import HomePage from "./routes/HomePage"
import ErrorPage from "./routes/ErrorPage"
import AdminPage from "./routes/AdminPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/panier",
        element: <Panier />
      },
      {
        path: "/admin",
        element: <AdminPage />
      },
    ]
  }
])

export default router
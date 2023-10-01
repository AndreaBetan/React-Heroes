import { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({ children }) => {

    // Valida si el usuario esta autenticado. El logged hace parte del AuthContext
    const { logged } = useContext(AuthContext)

    // Establece la condicion y si esta logeado muestra el hijo de lo contrario lleva a la pg de login
    return (logged) ? children : <Navigate to='/login' />
}

// Finalmente, se exporta este componenente a la ruta de toda la App

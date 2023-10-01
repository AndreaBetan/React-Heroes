import { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router-dom"


export const PublicRoute = ({children}) => {

    const { logged } = useContext(AuthContext)

    // Cuando ingreso a la app, logged pasa a true, por lo cual si no esta autenticado mostrara el hijo (login), de lo contrario lleva a marvel
  return (!logged) ? children : <Navigate to='/marvel'/>
}

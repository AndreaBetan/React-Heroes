import { HashRouter, Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
        <>
          <HashRouter>
            <Routes>
                
                <Route path='/login' element={
                  <PublicRoute>
                    < Login />
                  </PublicRoute>
                }/>

                {/* Al poner /* garantizo que cualquier ruta que no sea login me lleve a HeroresRoutes */}
                <Route path='/*' element={
                  <PrivateRoute>
                    {/* Al poner el componente HeroesRoutes aqui garantizo que quien no se encuentre loggeado no pueda acceder a estas rutas*/}
                    <HeroesRoutes />
                  </PrivateRoute>
                } />              
            </Routes>
          </HashRouter>
        </>
  )
}
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const initialState = {
    logged: false,
}
// Fx para inicializar el estado: Busca el usuario y lo carga
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        // Si el user existe, logged sera true y user seria igual a user
        logged: !!user,
        user: user
    }
};

export const AuthProvider = ({ children }) => {

    const [authState, dispachtAuthState] = useReducer(authReducer, initialState, init)

    const login = (name = '') => {

        const user = { id: 'ABC', name }
        const action = {
            // Establecer el tipo de ax de acuerdo a los establecido en el archivo type
            type: types.login,
            // lo que quiero almacenar en el state
            payload: user
        }
        // Almaceno el usuario en el localStorage
        localStorage.setItem('user', JSON.stringify(user));
        dispachtAuthState(action);
    };

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispachtAuthState(action);
    }

    return (

        <AuthContext.Provider value={{
            ...authState,
            // Methods
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// Es el que expone la informacion por medio de la utilizacion del AuthContext. Recibe todos los componenetes hijos para hacerse un HOC

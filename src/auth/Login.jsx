import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForms';
import { useContext } from 'react';
import { AuthContext } from './context';

export const Login = () => {

    const {formState, onInputChange} = useForm({name: '', password: ''});

    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = () => {

        if (formState.name == 'ComicFan' && formState.password == '123'){
            navigate('/', {replace: true})
            login(formState.name);
        } else {
            alert('User incorrect')              
        }
    };

    return (
        
        <div className="container-fluid container-form border">
            <h1 className='text-center text-light'>Login</h1>
            <br />

            <form className="text-light">
                <div className="mb-3">

                    <label className="form-label">Name</label>
                    <input type="email" className="form-control bg-black text-light" name="name" onChange={ onInputChange } />
                        <div className="form-text text-light text-light"><small>Please write in the name ComicFan and password: 123.</small></div>
                </div>

                <div className="mb-3">

                    <label className="form-label">Password</label>
                    <input type="password" className="form-control bg-black text-light" name='password' onChange={ onInputChange } />
                </div>

                <button type="button" className="container btn btn-outline-secondary" onClick={onLogin}>Login</button>
            </form>

        </div>
    )
}
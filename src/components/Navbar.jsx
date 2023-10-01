import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/context';
import imgMarvel from '../../docs/assets/marvel.jpg';
import imgDc from '../../docs/assets/dc.jpg';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-0 border-bottom border-secondary border-body">

            <div className="navbar-collapse container">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        <img className='img-marvel' src={imgMarvel} alt="" />
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        <img className='img-dc' src={imgDc} alt="" />
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link d-flex align-items-center"
                        to="/search"
                    >
                        <i className="fa-brands fa-searchengin"></i>
                                      
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary text-center text-white">
                        Hola <i className="fa-regular fa-circle-user"></i>
                        <br />
                        {user?.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        <i className="fa-regular fa-circle-left"></i>
                    </button>

                </ul>
            </div>
        </nav>
    )
}
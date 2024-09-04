import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const { user, signOut, signIn } = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/">
                    <img src="/ivs_logo_3.png" alt="Logo" width="25px" />
                </NavLink>
                <span className="navbar-brand" style={{ textDecoration: 'none' }}>IVS</span>

                <NavLink to="/" className="nav-link mx-2">Inicio</NavLink>
                <NavLink to="/Unete" className="nav-link mx-2">Unete</NavLink>

                <div className="ms-auto">

                    {user ? (
                        <button onClick={signOut} className="btn btn-outline-danger">Cerrar sesión</button>
                    ) : (
                        <button className="btn btn-primary" onClick={signIn}>
                            Iniciar sesión
                        </button>

                    )}

                </div>

            </nav>
        </>
    );
};

export default Navbar;
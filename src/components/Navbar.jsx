import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const { user, signOut } = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/">Inicio </NavLink>
                {user ? (
                    <button onClick={signOut} className="btn btn-outline-danger">Cerrar Sesión</button>
                ) : (
                    <NavLink to="/login" className="btn btn-outline-primary">Login </NavLink>
                )}
            </nav>
        </>
    );
};

export default Navbar;
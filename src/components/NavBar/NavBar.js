import { NavLink } from 'react-router-dom';
import Cartwidget from '../CartWidget/CartWidget';



function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="linkNav" to="/">
                    <p className="navbar-brand col-3 padd1" >Somos Luna</p>
                </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="navCat collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mt-2">
                        <NavLink className="linkNav" to="category/Toallitas"> 
                            <p className="nav-link" aria-current="page" >Toallitas</p>
                        </NavLink>
                        <NavLink  className="linkNav" to="category/Protectores"> 
                            <p className="nav-link" >Protectores</p>
                        </NavLink>
                        <NavLink className="linkNav" to="category/Copas"> 
                            <p className="nav-link">Copas</p>
                        </NavLink>
                    </ul>
                    <span className="navbar-text">
                        <NavLink to="cart">
                            <Cartwidget />
                        </NavLink>
                    </span>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
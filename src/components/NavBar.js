import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
import Cartwidget from './CartWidget';



function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/">
                    <a className="navbar-brand col-3 padd1" >Somos Luna</a>
                </NavLink>
                <div className="collapse navbar-collapse col-8 padd2" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="category/toallitas"> 
                            <a className="nav-link" aria-current="page" >toallitas</a>
                        </NavLink>
                        <NavLink to="category/protectores"> 
                            <a className="nav-link" >protectores</a>
                        </NavLink>
                        <NavLink to="category/copas"> 
                            <a className="nav-link">copas</a>
                        </NavLink>    
                    </div>
                </div>
                <div className="col-1 padd3">
                    <NavLink to="cart">
                        <div className="logoCarro">
                            <Cartwidget />
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';
import Cartwidget from './CartWidget';



function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="linkNav" to="/">
                    <p className="navbar-brand col-3 padd1" >Somos Luna</p>
                </NavLink>
                <div className="collapse navbar-collapse col-8 padd2" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="linkNav" to="category/toallitas"> 
                            <p className="nav-link" aria-current="page" >toallitas</p>
                        </NavLink>
                        <NavLink  className="linkNav" to="category/protectores"> 
                            <p className="nav-link" >protectores</p>
                        </NavLink>
                        <NavLink className="linkNav" to="category/copas"> 
                            <p className="nav-link">copas</p>
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
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
                        <NavLink to="category/toallita"> 
                            <a className="nav-link" aria-current="page" >Toallita</a>
                        </NavLink>
                        <NavLink to="category/protector"> 
                            <a className="nav-link" >Protector</a>
                        </NavLink>
                        <NavLink to="category/copa"> 
                            <a className="nav-link">Copa</a>
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
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartwidget from './CartWidget';


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand col-3 padd1" href="#">Somos Luna</a>
                <div className="collapse navbar-collapse col-8 padd2" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Toallitas</a>
                        <a className="nav-link" href="#">Protectores</a>
                        <a className="nav-link" href="#">Varios</a>
                    </div>
                </div>
                <div className="col-1 padd3">
                    <div className="logoCarro">
                        <Cartwidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
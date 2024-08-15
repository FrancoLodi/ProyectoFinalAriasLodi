import { CartWidget } from "./CartWidget.jsx";
import { Link } from 'react-router-dom';

export function Navbar (){
    return (
        <div className="navbar">
            <Link className="navbar-logo" to="/">
                <img className="navbar-logo-img" alt="Logo eCommerce" src="/src/assets/logo.png"/>
                <span className="navbar-logo-txt">TIENDA</span>
            </Link>
            <div className="paginas">
                <Link className="paginas-txt" to="/">Home</Link>
                <Link className="paginas-txt" to="/lista">Productos</Link>
                <Link className="paginas-txt" to="/contacto">Contacto</Link>
            </div>
            <CartWidget />
        </div>
    )
}
import { CartWidget } from "./CartWidget.jsx"

export function Navbar (){
    return (
        <div className="navbar">
            <a className="navbar-logo" href="/">
                <img className="navbar-logo-img" alt="Logo eCommerce" src="/src/assets/logo.png"/>
                <span className="navbar-logo-txt">TIENDA</span>
            </a>
            <div className="paginas">
                <a className="paginas-txt" href="/">Home</a>
                <a className="paginas-txt" href="/lista">Productos</a>
                <a className="paginas-txt" href="">Contacto</a>
            </div>
            <CartWidget />
        </div>
    )
}
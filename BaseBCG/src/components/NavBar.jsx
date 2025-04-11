import { useState } from 'react';
import { Link } from 'react-router-dom'
import Themes from './Themes'

const NavBar = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">                        
                        <li>
                            <a>Artículos</a>
                            <ul className="p-2">
                                <li><a>Catálogo</a></li>
                                <li><a>Ofertas</a></li>
                                <li><a>Administrar</a></li>
                            </ul>
                        </li>
                        <li><Link className="link link-hover" to="/proximamente">Proximamente</Link></li>
                        <li><a>Carrito</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl" title='Inicio'>BaseBCG</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">                    
                    <li>
                        <details>
                            <summary>Artículos</summary>
                            <ul className="p-2">
                                <li><a>Catálogo</a></li>
                                <li><a>Ofertas</a></li>
                                <li><a>Administrar</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link className="link link-hover" to="/proximamente">Proximamente</Link></li>
                    <li><a>Carrito</a></li>
                </ul>
            </div>
            <div className="navbar-end px-2">
                <Themes />
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Perfil
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
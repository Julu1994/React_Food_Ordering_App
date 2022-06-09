import React, {useState} from 'react'
import { FaHamburger, FaHome } from "react-icons/fa";
import { MdFoodBank, MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
    const [sidenav, setSidenav] = useState(false);

    return (
        <div>
            <div className="navbar">
                <Link to="/" className="navbar-icon">
                    <FaHamburger onClick={() => setSidenav(!sidenav) }/>
                </Link>
            </div>

            <nav className={sidenav ? "nav-main active" : "nav-main"}>
                <ul className="nav-list">
                    
                    <li className="nav-item">
                        <Link to="/" className="navbar-icon">
                            <span> <FaHome /></span>
                            <span> Home</span>
                            
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="navbar-icon">
                            <span> <MdFoodBank /></span>
                            <span> Menu</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="navbar-icon">
                            <span><GrContact /></span>
                            <span>Contact</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="navbar-icon">
                            <span><MdOutlineAdminPanelSettings /></span>
                            <span>Admin</span>
                        </Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar
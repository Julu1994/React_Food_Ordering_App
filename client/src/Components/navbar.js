import React, { useState } from "react";
import { FaHamburger, FaHome } from "react-icons/fa";
import {
    MdFoodBank,
    MdOutlineAdminPanelSettings,
    MdOutlineSupportAgent,
} from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import CartButton from "./SubComponents/cartButton";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
    const [sidenav, setSidenav] = useState(false);
    const navHide = () => {
        setSidenav(!sidenav);
        document.body.style.overflow = "unset";
    };

    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <h1 className="logo-main">Wolf</h1>
                    <p className="logo-motto">STAY AT HOME</p>
                </div>
                <Link to="#" className="navbar-icon">
                    <FaHamburger
                        onClick={() => {
                            setSidenav(!sidenav);
                            document.body.style.overflow = "hidden";
                        }}
                    />
                </Link>
                <div className="navbar-cart">
                    <CartButton />
                </div>
            </div>

            <nav className={sidenav ? "nav-main active" : "nav-main"}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <TiDelete className="nav-hide" onClick={navHide} />
                    </li>

                    <li className="nav-item">
                        <Link to="/" onClick={navHide} className="nav-link">
                            <span className="nav-icon">
                                {" "}
                                <FaHome />
                            </span>
                            <span className="nav-text"> Home</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" onClick={navHide} className="nav-link">
                            <span className="nav-icon">
                                {" "}
                                <MdFoodBank />
                            </span>
                            <span className="nav-text"> Menu</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/contact"
                            onClick={navHide}
                            className="nav-link">
                            <span className="nav-icon">
                                {" "}
                                <MdOutlineSupportAgent />{" "}
                            </span>
                            <span className="nav-text">Contact</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/admin"
                            onClick={navHide}
                            className="nav-link">
                            <span className="nav-icon">
                                <MdOutlineAdminPanelSettings />
                            </span>
                            <span className="nav-text">Admin</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

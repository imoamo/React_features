// Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className="nav-links">
                <li className="nav-item">
                    Products
                    <div className="mega-menu">
                        <div className="mega-menu-column">
                            <h3>Category 1</h3>
                            <ul>
                                <li>Subcategory 1.1</li>
                                <li>Subcategory 1.2</li>
                                <li>Subcategory 1.3</li>
                            </ul>
                        </div>
                        <div className="mega-menu-column">
                            <h3>Category 2</h3>
                            <ul>
                                <li>Subcategory 2.1</li>
                                <li>Subcategory 2.2</li>
                                <li>Subcategory 2.3</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="nav-item">About Us</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;

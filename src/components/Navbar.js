import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Basic Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/table-search">Table Search</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

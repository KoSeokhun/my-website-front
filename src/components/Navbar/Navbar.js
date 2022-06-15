import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
    <header>
        <h1>Navbar 위치</h1>
        <h4>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/example1">Example1</NavLink>
                </li>
                <li>
                    <NavLink to="/example2">Example2</NavLink>
                </li>
            </ul>
        </h4>
    </header>
  )
}

export default Navbar;
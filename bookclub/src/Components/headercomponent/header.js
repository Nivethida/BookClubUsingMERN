/**
 * Created by madhan on 9/28/17.
 */
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
               <div className="logo">
                   Logo
               </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

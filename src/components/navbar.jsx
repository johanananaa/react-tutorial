import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/lexikon">Bird Spotter</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link className="nav-link" to="/my-list">
                                Meine Vögel
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
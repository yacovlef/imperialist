import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Container from '../Container';

import './header.css';

import menu from './menu.svg';
import close from './close.svg';

import { navList } from '../../../config/data.json';

class Header extends Component {
    state = {
        responsiveMenu: false
    }

    componentDidMount() {
        document.addEventListener('click', event => {
            if (event.target.id === 'header__responsive_button') {
                this.handlerResponsiveButton();
            } else if (this.state.responsiveMenu) {
                this.handlerResponsiveButton();
            }
        })
    }

    handlerResponsiveButton = () => {
        this.setState((state) => ({responsiveMenu: !state.responsiveMenu}));
    }

    render() {
        const { responsiveMenu } = this.state;
        const { user, logout } = this.props;

        const renderNav = (
            <ul>
                {(user)
                        ?
                            <>
                                {navList.map(({ label, to, exact }, index) => <li key={index}><NavLink exact={exact} activeClassName="header__link-active" className="header__link" to={to}>{label}</NavLink></li>)}

                                <li><Link onClick={logout} className="header__link" to="#">{`${user.lastName} ${user.firstName}`} (Выход)</Link></li>
                            </>
                        :
                            <li><Link className="header__link" to="/login">Вход</Link></li>}
            </ul>
        );

        return (
            <header className="header">
                <Container>
                    <div className="header__layout">
                        <div className="header__logo">
                            <Link className="header__link" to="/">IMPERIALIST</Link>
                        </div>

                        <nav className="header__nav">
                            {renderNav}
                        </nav>

                        <div className="header__responsive_button">
                            <Link to="#">
                                <img id="header__responsive_button" src={responsiveMenu ? close : menu} alt="close" />
                            </Link>
                        </div>

                        <nav className="header__responsive_nav">
                            {responsiveMenu && renderNav}
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;

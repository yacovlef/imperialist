import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';

import './header.css';

import menu from './menu.svg';
import close from './close.svg';

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
                {
                    (user)
                        ?
                            <>
                                <li><Link className="header__link" to="/">Заказы</Link></li>
                                <li><Link className="header__link" to="/projects">Проекты</Link></li>
                                <li><Link className="header__link" to="/nomenclature">Номенклатура</Link></li>
                                <li><Link className="header__link" to="/users">Пользователи</Link></li>
                                <li><Link onClick={logout} className="header__link" to="#">{`${user.lastName} ${user.firstName}`} (Выход)</Link></li>
                            </>
                        :
                            <li><Link className="header__link" to="/login">Вход</Link></li>
                }
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

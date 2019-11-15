import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';

import './header.css';

import menu from './menu.svg';

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
        const { user, logout } = this.props;

        return (
            <header className="header">
                <Container>
                    <div className="header__layout">
                        <div className="header__logo">
                            <Link className="header__link" to="/">IMPERIALIST</Link>
                        </div>

                        <div className="header__responsive_button">
                            <Link to="#">
                                <img id="header__responsive_button" src={menu} alt="close" />
                            </Link>
                        </div>

                        <nav className="header__nav">
                            {
                                (user)
                                    ?
                                        <>
                                            <Link className="header__link" to="/">Заказы</Link>
                                            <Link className="header__link" to="/products">Изделия</Link>
                                            <Link className="header__link" to="/nomenclature">Номенклатура</Link>
                                            <Link className="header__link" to="/users">Пользователи</Link>
                                            <Link onClick={logout} className="header__link" to="#">{`${user.lastName} ${user.firstName}`} (Выход)</Link>
                                        </>
                                    :
                                        <Link className="header__link" to="/login">Вход</Link>
                            }
                        </nav>

                        <nav className="header__responsive_nav">
                            {
                                this.state.responsiveMenu &&
                                    (
                                        (user)
                                            ?
                                                <>
                                                    <Link className="header__link" to="/">Заказы</Link><br/>
                                                    <Link className="header__link" to="/products">Изделия</Link><br/>
                                                    <Link className="header__link" to="/nomenclature">Номенклатура</Link><br/>
                                                    <Link className="header__link" to="/users">Пользователи</Link><br/>
                                                    <Link onClick={logout} className="header__link" to="#">{`${user.lastName} ${user.firstName}`} (Выход)</Link>
                                                </>
                                            :
                                                <Link className="header__link" to="/login">Вход</Link>
                                    )
                            }
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;

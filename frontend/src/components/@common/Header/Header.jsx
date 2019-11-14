import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';

import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__layout">
                    <div className="header__logo">
                        IMPERIALIST
                    </div>

                    <nav className="header__nav">
                        <Link className="header__link" to="#">Заказы</Link>
                        <Link className="header__link" to="#">Изделия</Link>
                        <Link className="header__link" to="#">Номенклатура</Link>
                        <Link className="header__link" to="/users">Пользователи</Link>
                        <Link className="header__link" to="#">Яковлев Алексей</Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;

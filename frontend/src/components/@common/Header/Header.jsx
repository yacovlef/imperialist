import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Container>
                    <Link className="navbar-brand" to="#">IMPERIALIST</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Заказы</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Изделия</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Номенклатура</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Пользователи</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Яковлев Алексей Николаевич
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#">Выход</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    );
}

export default Header;
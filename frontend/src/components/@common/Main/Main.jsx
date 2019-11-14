import React from 'react';

import Container from '../Container';

const Main = ({ children }) => {
    return (
        <Container>
            <main className="py-4">
                {children}
            </main>
        </Container>
    );
}

export default Main;

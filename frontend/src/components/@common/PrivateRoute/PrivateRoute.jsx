import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ user, component, render, ...rest }) => {
    const RenderComponent = component || render;

    return (
        <Route
            {...rest}
            render={() => user
                ? <RenderComponent />
                : <Redirect to="/login" />}
        />
    );
};

export default PrivateRoute;

import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Login from "./Login";
import Register from "./Register";
import Explore from "./Explore";
import Routes from "./Routes";
import PageLayout from "./PageLayout";
import PageRoutes from "./PageRoutes";

function Main(props) {
    const { isLoggedIn, handleLoggedIn } = props;

    const showLogin = () => {
        return isLoggedIn ? (
            <Redirect to="/explore" />
        ) : (
            <Login handleLoggedIn={handleLoggedIn} />
        );
    };

    const showExplore= () => {
        return isLoggedIn ? <Explore /> : <Redirect to="/login" />;
    };
    const showRoutes= () => {
        return isLoggedIn ? <PageRoutes /> : <Redirect to="/login" />;
    };
    return <div className="main">
        <Switch>
            <Route path="/" exact render={showLogin} />
            <Route path="/login"render={Login} />
            <Route path="/register" component={Register} />
            <Route path="/explore" render={showExplore} />
            <Route path="/routes" render={showRoutes} />
        </Switch>
    </div>;
}

export default Main;
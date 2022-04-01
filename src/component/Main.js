import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Login from "./Login";
import Register from "./Register";
import Explore from "./Explore";
import Routes from "./Routes";

function Main(props) {
    return <div className="main">
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/explore" component={Explore} />
            <Route path="/routes" component={Routes} />
        </Switch>
    </div>;
}

export default Main;
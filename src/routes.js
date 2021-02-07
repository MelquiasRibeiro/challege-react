import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dash from "./pages/dahsboard";
import Edit from "./pages/edit";

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dash} />
                <Route path="/register" exact component={Register} />
                <Route path="/edit/:email" exact component={Edit} />
            </Switch>
        </BrowserRouter>
    );
}

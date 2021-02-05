import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dash from './pages/dahsboard';

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" exact component={Dash} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

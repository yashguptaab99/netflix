import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp} from './pages/index';
import * as ROUTES from './constants/routes';

export function App() {
    return (
    <Router>
        <Route exact path={ROUTES.HOME}>
            <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
            <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
            <SignIn />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}> 
            <SignUp />
        </Route>
    </Router>
    );
}


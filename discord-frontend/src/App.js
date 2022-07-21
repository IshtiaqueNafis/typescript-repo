import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LogInPage from "./components/auth/LogInPage/LogInPage";
import RegisterPage from "./components/auth/RegisterPage/RegisterPage";
import DashBoard from "./components/dashboard/DashBoard";
import AlertNotification from "./components/common/AlertNotification";


const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <LogInPage/>
                </Route>
                <Route exact path={"/register"}>
                    <RegisterPage/>
                </Route>
                <Route exact path={"/dashboard"}>
                    <DashBoard/>
                </Route>
                <Route path={"/"}>
                    <Redirect to={'/dashboard'}/>
                </Route>

            </Switch>

        </BrowserRouter>
        <AlertNotification/>
    </>
);

export default App;

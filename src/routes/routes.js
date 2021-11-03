import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom";
import {TodosPage} from "../components/pages/TodosPage";
import {ProfilePage} from "../components/pages/ProfilePage";
import {AuthPage} from "../components/pages/AuthPage";
import {RegistrationPage} from "../components/pages/RegistrationPage";

export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/todos" exact>
                    <TodosPage/>
                </Route>
                <Route path="/profile" exact>
                    <ProfilePage />
                </Route>
                <Redirect to="/todos"/>
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/login" exact>
                <AuthPage/>
            </Route>
            <Route path="/registration" exact>
                <RegistrationPage/>
            </Route>
            <Redirect to="/login"/>
        </Switch>
    )
}

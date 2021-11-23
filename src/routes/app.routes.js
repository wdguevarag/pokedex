import React from "react"
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StartPage from '../pages/StartPage'

export const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/start" component={StartPage} />
                <Redirect to="/start"/>
            </Switch>
        </Router>
    )
}
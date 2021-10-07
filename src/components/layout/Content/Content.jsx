import React from "react"
import { Switch, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import Feed from '../../pages/Feed/Feed'
import Home from '../../pages/Home/Home'
import SingUp from '../../pages/SignUp/SignUp'
import Login from '../../pages/Login/Login'
import Interests from '../../pages/SignUp/Interests'
import Experence from '../../pages/SignUp/Experence'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/SignUp">
                <SingUp />
            </Route>
            <Route exact path="/Interests">
                <Interests />
            </Route>
            <Route exact path="/Experence">
                <Experence />
            </Route>
            <Route exact path="/Login">
                <Login />
            </Route>
            <Route path="/Feed"> 
                <Feed />
            </Route>
            <Route path="/About">
                <About />
            </Route>
        </Switch>
    </main>
)

export default Content
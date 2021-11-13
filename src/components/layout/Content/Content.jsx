import React from "react"
import { Switch, Route } from 'react-router-dom'
import About from '../../pages/About/About'
import Feed from '../../pages/Feed/Feed'
import CreateOrg from '../../pages/Org/CreateOrg'
import OrgInvest from '../../pages/Org/OrgInvest'
import UpPitch from '../../pages/Org/UpPitch'
import Home from '../../pages/Home/Home'
import SingUp from '../../pages/SignUp/SignUp'
import Login from '../../pages/Login/Login'
import Interests from '../../pages/SignUp/Interests'
import Experence from '../../pages/SignUp/Experence'
import Outsource from '../../pages/Perfil/Outsource/Outsource'
import Investment from '../../pages/Investment/Investment'
import Personal from '../../pages/Perfil/Personal/Personal'
import InvestmentList from "../../pages/Investment/InvestimentList"

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
            <Route path="/CreateOrg"> 
                <CreateOrg />
            </Route>
            <Route path="/UpPitch"> 
                <UpPitch />
            </Route>
            <Route path="/OrgInvest"> 
                <OrgInvest />
            </Route>
            <Route path="/InvestmentList"> 
                <InvestmentList />
            </Route>
            <Route path="/Outsource"> 
                <Outsource />
            </Route>
            <Route path="/Personal"> 
                <Personal />
            </Route>
            <Route path="/Investment"> 
                <Investment />
            </Route>
            <Route path="/About">
                <About />
            </Route>
        </Switch>
    </main>
)

export default Content
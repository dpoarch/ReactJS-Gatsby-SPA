import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import AccountProfile from "../components/AccountProfile"
import Home from "../components/Home"
import Login from "../components/Login"
import Route from "../components/Route"
import Status from "../components/Status"

const App = (props) => (
  <Layout {...props}>
    <Status auth={props.auth} user={props.user} />
    <Router>
      <Login {...props} path="/app/login" />
      <Route user={props.user} path="/app/profile" component={Home} />
      <Route user={props.user} path="/app/details" component={AccountProfile} />
    </Router>
  </Layout>
)

export default App

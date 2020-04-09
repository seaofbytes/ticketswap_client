import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import './App.css'

// Components
import MainLoginPage from './components/Login/MainLoginPage'
import EventListContainer from './components/MainPage/EventListContainer'
import EventDetailContainer from './components/EventDetail/EventDetailContainer'
import TicketDetailContainer from './components/TicketDetail/TicketDetailContainer'
import Navbar from './components/Navbar/Navbar'
import SuccessfulFormSubmit from './components/SuccessfulFormSubmit'

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%', background: 'white' }}>
        <Navbar></Navbar>
        <Switch>
          <Route
            path="/events/:id"
            exact
            component={EventDetailContainer}
          ></Route>
          <Route path="/tickets/:id" component={TicketDetailContainer}></Route>
          <Route path="/" exact component={MainLoginPage}></Route>
          <Route path="/events" component={EventListContainer}></Route>
          <Route path="/success" component={SuccessfulFormSubmit}></Route>
        </Switch>
      </div>
    )
  }
}

export default App

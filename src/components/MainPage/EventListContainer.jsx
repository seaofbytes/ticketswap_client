import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from './EventList'
import { fetchEvents } from '../../actions/event'
import { getCurrentUser } from '../../actions/user'
import CreateEventFormContainer from './CreateEventFormContainer'

class EventListContainer extends Component {
  state = {
    createForm: false
  }
  componentDidMount() {
    this.props.fetchEvents()
    this.props.getCurrentUser()
  }

  toggleCreateEvent = () => {
    this.setState({ createForm: !this.state.createForm })
  }
  render() {
    return (
      <div>
        <p className="welcome-to text-center">
          <small>welcome to</small>
        </p>
        <h1 className="main-page-title text-center">ticketswap</h1>
        {this.state.createForm ? (
          <CreateEventFormContainer
            toggleCreateEvent={this.toggleCreateEvent}
          ></CreateEventFormContainer>
        ) : null}
        <EventList
          toggleCreateEvent={this.toggleCreateEvent}
          userId={this.props.userId}
          events={this.props.events}
        ></EventList>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.event,
    userId: state.user.userId
  }
}

export default connect(mapStateToProps, { fetchEvents, getCurrentUser })(
  EventListContainer
)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventDetail from './EventDetail'
import CreateTicketFormContainer from './CreateTicketFormContainer'
import { fetchSingleEvent } from '../../actions/event'
import { fetchTickets } from '../../actions/ticket'
import EditEventFormContainer from './EditEventFormContainer'

class EventDetailContainer extends Component {
  state = {
    editMode: false,
    ticketMode: false
  }

  // Show or hide edit event
  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  // Show or hide edit ticket
  toggleTicketMode = () => {
    this.setState({ ...this.state, ticketMode: !this.state.ticketMode })
  }

  // Fetch all tickets and a singleEvent
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchTickets(id)
    this.props.fetchSingleEvent(id)
  }

  // Redirect after successful form submit
  redirect = () => {
    this.props.history.push('/success')
  }

  render() {
    return (
      <div>
        <EventDetail
          toggleTicketMode={this.toggleTicketMode}
          tickets={this.props.tickets}
          event={this.props.event}
          userId={this.props.userId}
        ></EventDetail>
        {this.state.editMode ? (
          <EditEventFormContainer
            redirect={this.redirect}
          ></EditEventFormContainer>
        ) : null}
        {this.props.userId === this.props.event.userId ? (
          <button
            className="custom-bt btn btn-success"
            onClick={() => this.toggleEditMode()}
          >
            Edit event
          </button>
        ) : null}
        {this.state.ticketMode ? (
          <CreateTicketFormContainer
            toggleTicketMode={this.toggleTicketMode}
            eventId={this.props.match.params.id}
          ></CreateTicketFormContainer>
        ) : null}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    event: state.singleEvent,
    tickets: state.ticket,
    user: state.user.currentUser,
    userId: state.user.userId,
    singleEvent: state.user.singleEvent
  }
}

export default connect(mapStateToProps, { fetchSingleEvent, fetchTickets })(
  EventDetailContainer
)

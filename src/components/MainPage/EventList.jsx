import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination'

export default class EventList extends Component {
  state = {
    currentPage: 1,
    eventsPerPage: 9
  }

  // Pagination
  paginate = pageNumber => {
    this.setState({ ...this.state, currentPage: pageNumber })
    console.log(pageNumber, 'PAGENUMBER')
  }

  // Display events
  displayEvents = () => {
    console.log('EVENTS ', this.props.events)
    if (this.props.events.length > 0) {
      const indexOfLastEvent = this.state.currentPage * this.state.eventsPerPage
      const indexOfFirstEvent = indexOfLastEvent - this.state.eventsPerPage

      const currentEvents = this.props.events.slice(
        indexOfFirstEvent,
        indexOfLastEvent
      )
      const dateToday = new Date()
      const date = dateToday.getDate()

      return currentEvents.map(event => {
        // If event is expired, don't include it in the list
        if (Number(event.createdAt.slice(8, 10)) < date) {
          return
        } else {
          return (
            <div key={event.id} className="card container card-style">
              <h4 className="text-center card-text event-name">{event.name}</h4>
              <hr></hr>
              <img
                src={event.picture}
                className="card-img-style card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="p-s">
                  Start date: {event.startDate.slice(0, 10)}
                </p>
                <p className="p-s">End Date: {event.endDate.slice(0, 10)}</p>
                <hr></hr>
                <Link to={`/events/${event.id}`}>
                  <p className="event-links">
                    Go To Event{' '}
                    {this.props.userId === event.userId ? (
                      <small>- this is your event</small>
                    ) : null}
                  </p>
                </Link>
              </div>
            </div>
          )
        }
      })
    } else {
      return <div> Loading ...</div>
    }
  }

  render() {
    return (
      <div className="fluid-container">
        <div className="container">
          <p className="text-center browse-our-events ">Browse our events</p>
          <p className="or text-center">or</p>
          {this.props.userId ? (
            <button
              onClick={() => this.props.toggleCreateEvent()}
              className="btn btn-success"
              style={{ marginLeft: '42.5%' }}
            >
              {' '}
              Add a new event
            </button>
          ) : (
            <p className="text-center">
              <Link to="/">Login</Link> to create events.{' '}
            </p>
          )}
        </div>
        <hr></hr>
        <div className="event-parent-div">{this.displayEvents()}</div>
        <Pagination
          paginate={this.paginate}
          eventsPerPage={this.state.eventsPerPage}
          totalEvents={this.props.events.length}
        ></Pagination>
      </div>
    )
  }
}

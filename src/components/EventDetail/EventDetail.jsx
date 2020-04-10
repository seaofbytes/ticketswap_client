import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventDetail extends Component {
  displayTickets = () => {
    if (this.props.tickets !== undefined) {
      let rowNumber = 0
      let riskStyle
      return this.props.tickets.map(ticket => {
        rowNumber++

        if (Math.floor(ticket.riskPercent) < 33) {
          console.log(Math.floor(ticket.riskPercent))
          riskStyle = {
            backgroundColor: 'green'
          }
        } else if (
          Math.floor(
            ticket.riskPercent > 33 && Math.floor(ticket.riskPercent) < 60
          )
        ) {
          riskStyle = {
            backgroundColor: 'yellow'
          }
        } else {
          riskStyle = {
            backgroundColor: 'red'
          }
        }

        return (
          <tr key={ticket.id}>
            <td scope="row">{rowNumber}</td>
            <td>{ticket.price}</td>
            <td>{ticket.description}</td>
            <td>{ticket.seller}</td>
            <td>{Math.ceil(ticket.riskPercent)} % </td>
            <td>
              <span style={riskStyle} className="dot"></span>
            </td>
            <td>
              <Link to={`/tickets/${ticket.id}`}>Go to ticket</Link>
            </td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td>Loading ...</td>
        </tr>
      )
    }
  }

  displayEventInfo = () => {
    return this.props.event !== undefined ? (
      <div className="card mb-3 event-info">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.event.picture}
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{this.props.event.name}</h3>
              <hr></hr>
              <p className="card-text">{this.props.event.description}</p>
              <p className="card-text">
                <small className="text-muted">.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Loading ...</div>
    )
  }

  render() {
    return (
      <div>
        <h1 className="event-title text-center">Event Details</h1>

        {this.props.userId ? (
          <button
            className="bt-custom btn btn-success"
            onClick={() => this.props.toggleTicketMode()}
          >
            Add a ticket
          </button>
        ) : (
          <p className="text-center event-link">
            <Link to="/">Login</Link> to create tickets.
          </p>
        )}

        <div>
          {this.displayEventInfo()}

          <h3 className="text-center">Tickets for this event :</h3>
          <table className="table table-style">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Seller</th>
                <th scope="col">Risk %</th>
                <th scope="col"></th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>{this.displayTickets()}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

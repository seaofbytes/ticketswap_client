import React, { Component } from 'react'

export default class TicketDetail extends Component {
  displayTicketDetails = () => {
    if (this.props.singleTicket.length !== 0) {
      return (
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <div className="ticket-details-div row">
            <div className="col-md-8">
              <img
                className="img-fluid"
                style={{ width: '500px' }}
                src={this.props.singleTicket.picture}
                alt=""
              />
            </div>

            <div className="col-md-4">
              <h3 className="my-3">{this.props.singleTicket.description}</h3>
              <hr></hr>
              <h3 className="my-3">Ticket Details</h3>
              <ul>
                <li>Seller : {this.props.singleTicket.seller}</li>
                <li>Price : {this.props.singleTicket.price}</li>
                <li>
                  Risk factor : {Math.ceil(this.props.singleTicket.riskPercent)}{' '}
                  %
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
  render() {
    return <div>{this.displayTicketDetails()}</div>
  }
}

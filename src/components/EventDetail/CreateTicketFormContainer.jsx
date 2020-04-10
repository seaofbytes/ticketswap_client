import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateTicketForm from './CreateTicketForm'
import { createTicket } from '../../actions/ticket'
class CreateTicketFormContainer extends Component {
  state = {
    picture: '',
    price: '',
    description: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createTicket({
      picture: this.state.picture,
      price: this.state.price,
      description: this.state.description,
      eventId: this.props.eventId,
      userId: this.props.userId
    })

    this.props.toggleTicketMode()
  }

  render() {
    return (
      <div>
        <CreateTicketForm
          user={this.props.user}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        ></CreateTicketForm>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    user: state.user
  }
}

export default connect(mapStateToProps, { createTicket })(
  CreateTicketFormContainer
)

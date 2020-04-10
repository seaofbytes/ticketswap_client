import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditTicketForm from './EditTIcketForm'
import { updateTicket } from '../../actions/ticket'

class EditTicketFormContainer extends Component {
  state = {
    price: '',
    description: '',
    picture: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    const { price, description, picture } = this.state
    e.preventDefault()
    const id = this.props.id
    const updatedTicket = {
      price,
      description,
      picture
    }

    this.props.updateTicket(updatedTicket, id)
    this.props.redirect()
  }

  render() {
    return (
      <div>
        <EditTicketForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        ></EditTicketForm>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  }
}

export default connect(mapStateToProps, { updateTicket })(
  EditTicketFormContainer
)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditEventForm from './EditEventForm'

import { updateEvent } from '../../actions/event'

class EditEventFormContainer extends Component {
  state = {
    name: '',
    description: '',
    picture: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const id = this.props.event.id
    const updatedEvent = {
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      userId: this.props.userId
    }

    this.props.updateEvent(updatedEvent, id)
    this.props.redirect()
  }

  render() {
    return (
      <div>
        <EditEventForm
          toggle={this.props.toggle}
          user={this.props.user}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        ></EditEventForm>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
}

export default connect(mapStateToProps, { updateEvent })(EditEventFormContainer)

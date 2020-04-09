import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateEventForm from './CreateEventForm'
import { createEvent } from '../../actions/event'
class CreateEventFormContainer extends Component {
  state = {
    name: '',
    description: '',
    picture: '',
    startDate: new Date(),
    endDate: new Date()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleStartDate = date => {
    this.setState({
      startDate: date
    })
  }

  handleEndDate = date => {
    this.setState({
      endDate: date
    })
  }

  handleSubmit = e => {
    const { name, description, picture, startDate, endDate } = this.state
    e.preventDefault()
    this.props.createEvent({
      name,
      description,
      picture,
      startDate,
      endDate,
      userId: this.props.userId
    })

    this.props.toggleCreateEvent()
  }

  render() {
    return (
      <div>
        <CreateEventForm
          user={this.props.user}
          handleEnd={this.handleEndDate}
          handleStart={this.handleStartDate}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        ></CreateEventForm>
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

export default connect(mapStateToProps, { createEvent })(
  CreateEventFormContainer
)

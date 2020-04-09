import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'

import 'react-datepicker/dist/react-datepicker.css'

export default class CreateEventForm extends Component {
  render() {
    if (this.props.user !== '') {
      return (
        <div className="create-event-form">
          <form
            className="form-style-event"
            onSubmit={e => this.props.handleSubmit(e)}
          >
            <p>Name : </p>
            <input
              name="name"
              value={this.props.values.name}
              onChange={e => this.props.handleChange(e)}
              type="text"
            ></input>

            <p>Description : </p>
            <input
              name="description"
              value={this.props.values.description}
              onChange={e => this.props.handleChange(e)}
              type="text"
            ></input>

            <p>Picture : </p>
            <input
              name="picture"
              value={this.props.values.picture}
              onChange={e => this.props.handleChange(e)}
              type="text"
            ></input>

            <p>Start date </p>
            <DatePicker
              selected={this.props.values.startDate}
              onChange={this.props.handleStart}
            />

            <p>End date </p>
            <DatePicker
              selected={this.props.values.endDate}
              onChange={this.props.handleEnd}
            />

            <button className="btn btn-sm btn-success" type="submit">
              Create Event
            </button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h3 className="text-center">
            <Link to="/">Login</Link> to create events.
          </h3>
        </div>
      )
    }
  }
}

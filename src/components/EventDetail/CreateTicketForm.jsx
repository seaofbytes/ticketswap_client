import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateEventForm extends Component {
  render() {
    if (this.props.user !== '') {
      return (
        <div className="create-ticket-form-container">
          <h4 className="text-center">Create a new ticket</h4>
          <form
            className="form-style form-group mx-sm-3 mb-2"
            onSubmit={e => {
              this.props.handleSubmit(e)
            }}
          >
            <p className="text-center">Picture (optional) : </p>
            <input
              className="form-inp"
              name="picture"
              value={this.props.values.picture}
              onChange={e => this.props.handleChange(e)}
              type="text"
            ></input>

            <p className="text-center">Price : </p>
            <input
              className="form-inp"
              name="price"
              value={this.props.values.price}
              onChange={e => this.props.handleChange(e)}
              type="text"
            ></input>

            <p className="text-center">Description </p>
            <input
              className="form-inp"
              name="description"
              value={this.props.values.description}
              onChange={e => this.props.handleChange(e)}
              type="text"
            ></input>

            <button
              className="custom-bt text-center btn btn-success"
              type="submit"
            >
              Create Ticket
            </button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h3 className="text-center">
            <Link to="/">Login</Link> to create tickets.
          </h3>
        </div>
      )
    }
  }
}

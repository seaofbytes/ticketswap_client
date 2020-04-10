import React, { Component } from 'react'

import 'react-datepicker/dist/react-datepicker.css'

export default class EditEventForm extends Component {
  render() {
    return (
      <div className="edit-event-form-div">
        <h4 className="text-center">Edit your event :</h4>
        <form
          onSubmit={e => {
            this.props.handleSubmit(e)
          }}
        >
          <p>Edit Name : </p>
          <input
            name="name"
            onChange={e => this.props.handleChange(e)}
            type="text"
          ></input>

          <p>Edit Description : </p>
          <input
            name="description"
            onChange={e => this.props.handleChange(e)}
            type="text"
          ></input>

          <p>Edit Picture : </p>
          <input
            name="picture"
            onChange={e => this.props.handleChange(e)}
            type="text"
          ></input>

          <button className="btn btn-success bt-custom" type="submit">
            Save Changes{' '}
          </button>
        </form>
      </div>
    )
  }
}

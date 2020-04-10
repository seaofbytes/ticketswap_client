import React, { Component } from 'react'

export default class EditTicketForm extends Component {
  render() {
    const { picture, price, description } = this.props.values
    return (
      <div className="create-event-form " style={{ marginTop: '10px' }}>
        <h4>Edit your ticket :</h4>
        <form
          className="form-style-event"
          onSubmit={e => this.props.handleSubmit(e)}
        >
          <p>Edit Price : </p>
          <input
            name="price"
            onChange={e => this.props.handleChange(e)}
            type="text"
            value={price}
          ></input>

          <p>Edit Description : </p>
          <input
            name="description"
            onChange={e => this.props.handleChange(e)}
            type="text"
            value={description}
          ></input>

          <p>Edit Picture : </p>
          <input
            name="picture"
            onChange={e => this.props.handleChange(e)}
            type="text"
            value={picture}
          ></input>

          <button className="btn btn-success bt-custom" type="submit">
            Save Changes{' '}
          </button>
        </form>
      </div>
    )
  }
}

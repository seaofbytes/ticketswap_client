import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SuccessfulFormSubmit extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', top: '10%', left: '17%' }}>
        <h1>Your changes were saved.</h1>
        <Link to="/events"> Continue </Link>
      </div>
    )
  }
}

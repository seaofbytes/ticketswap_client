import React, { Component } from 'react'
import './CommentFormStyle.css'
import { Link } from 'react-router-dom'

export default class CommentForm extends Component {
  render() {
    if (this.props.user !== '') {
      return (
        <div className="comment-box" class="container">
          <div class="row"></div>

          <div class="row">
            <div class="comment-box col-md-6">
              <div class="widget-area no-padding blank">
                <div class="status-upload">
                  <form onSubmit={e => this.props.handleSubmit(e)}>
                    <textarea
                      value={this.props.value}
                      onChange={e => this.props.handleChange(e)}
                      placeholder="Enter a comment..."
                    ></textarea>
                    <button type="submit" class="btn btn-success green">
                      <i class="fa fa-share"></i> Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {' '}
          <p style={{ marginTop: '30px' }} className="text-center">
            You must be <Link to="/">Logged In</Link> to comment.
          </p>{' '}
        </div>
      )
    }
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'

import { createComment, fetchComments } from '../../actions/comment'
import { getCurrentUser } from '../../actions/user'

class CommentFormContainer extends Component {
  state = {
    commentText: '',
    author: ''
  }

  componentDidMount() {
    this.props.fetchComments(this.props.id)
  }

  handleChange = e => {
    this.setState({
      commentText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createComment(this.state.commentText, this.props.id)
  }

  render() {
    return (
      <div>
        <CommentForm
          user={this.props.user}
          value={this.state.commentText}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></CommentForm>
      </div>
    )
  }
}

const mapStateToProps = state => {
  //
  return {
    comments: state.comments,
    user: state.user
  }
}

export default connect(mapStateToProps, {
  createComment,
  fetchComments,
  getCurrentUser
})(CommentFormContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CommentStyle.css'
import TicketDetail from './TicketDetail'
import { fetchSingleTicket } from '../../actions/ticket'
import CommentFormContainer from './CommentFormContainer'
import EditTicketFormContainer from './EditTicketFormContainer'
import { fetchRisk } from '../../actions/risk'

class TicketDetailContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchRisk(id)
    this.props.fetchSingleTicket(id)
  }

  redirect = () => {
    this.props.history.push('/success')
  }
  render() {
    return (
      <div>
        <TicketDetail
          singleTicket={this.props.risk}
          id={this.props.match.params.id}
          ticket={this.props.ticket}
        ></TicketDetail>

        <h3 className="text-center">Comments</h3>
        {this.props.comments.length > 0
          ? this.props.comments.map(comment => {
              return (
                <div
                  id={comment.id}
                  style={{ marginLeft: '17%' }}
                  class="container"
                >
                  <div className="row">
                    <div className="col-8">
                      <div className="card card-white post">
                        <div className="post-heading">
                          <div className="float-left image">
                            <img
                              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                              className="img-circle avatar"
                              alt="user profile image"
                            />
                          </div>
                          <div className="float-left meta">
                            <div className="title h5">
                              <a href="#">
                                <b>{comment.author}</b>
                              </a>
                              <span> made a post.</span>
                            </div>
                            <h6 className="text-muted time">
                              {comment.createdAt.slice(12, 29)}
                            </h6>
                          </div>
                        </div>
                        <div className="post-description">
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          : null}
        <CommentFormContainer
          id={this.props.match.params.id}
        ></CommentFormContainer>
        {this.props.singleTicket.userId === this.props.userId ? (
          <EditTicketFormContainer
            redirect={this.redirect}
            id={this.props.singleTicket.id}
          ></EditTicketFormContainer>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    comments: state.comments,
    userId: state.user.userId,
    singleTicket: state.singleTicket,
    risk: state.risk
  }
}

export default connect(mapStateToProps, { fetchSingleTicket, fetchRisk })(
  TicketDetailContainer
)

const commentStyle = {
  border: '1px solid black',
  borderRadius: '5px',
  maxWidth: '550px',
  margin: '10px',
  marginLeft: '80px',
  padding: '10px'
}

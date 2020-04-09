import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import SignupFormContainer from './SignupFormContainer'
import LoginFormContainer from './LoginFormContainer'
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../../actions/user'

class MainLoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    loginMode: true
  }

  // Switch between login / signup
  toggleModeOnClick = () => {
    this.setState({
      ...this.state,
      loginMode: !this.state.loginMode
    })
  }

  render() {
    if (!this.props.user.jwt) {
      if (this.state.loginMode) {
        return (
          <div>
            <LoginFormContainer toggleModeOnClick={this.toggleModeOnClick} />
          </div>
        )
      } else {
        return (
          <div>
            <SignupFormContainer
              toggleModeOnClick={this.toggleModeOnClick}
            ></SignupFormContainer>
          </div>
        )
      }
    } else {
      return (
        <div style={{ paddingTop: '30%' }} className="card text-center">
          <div
            style={{ backgroundColor: 'black', color: 'white' }}
            className="card-header"
          >
            Login successful !
          </div>
          <div className="card-body">
            <h5 className="card-title">welcome</h5>
            <p className="card-text">to Ticketswap</p>
            <Link to="/events" className="btn btn-sm btn-primary">
              Click to continue
            </Link>
          </div>
          <div
            style={{ backgroundColor: 'black' }}
            className="card-footer text-muted"
          >
            :)
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userInfo: state.currentUser
  }
}

export default connect(mapStateToProps, { login, getCurrentUser })(
  MainLoginPage
)

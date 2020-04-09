import React, { Component } from 'react'
import Facebook from '../Facebook'

import './LoginFormStyle.css'

export default class LoginForm extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <h1 className="login-ticketswap">Ticketswap</h1>
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png"
              id="icon"
              alt="User Icon"
              className="loginImg"
            />
          </div>

          <form
            onSubmit={e => {
              this.props.onSubmit(e)
            }}
          >
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="login"
            />
            <input
              onChange={e => this.props.onChange(e)}
              type="text"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <p
              onClick={() => this.props.toggleModeOnClick()}
              className="underlineHover"
            >
              Don't have an account ? Sign up !
            </p>
          </div>
        </div>
        <div style={{ marginTop: '50px' }}></div>
      </div>
    )
  }
}

//   // <Facebook></Facebook>

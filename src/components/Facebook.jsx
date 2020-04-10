import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: ''
  }

  responseFacebook = response => {
    console.log(response)
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })
  }

  componentClicked = () => {
    //runs when clicked
  }

  render() {
    let fbContent
    if (this.state.isLoggedIn) {
      fbContent = null
    } else {
      fbContent = (
        <FacebookLogin
          appId="505108050151306"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }
    return <div>{fbContent}</div>
  }
}

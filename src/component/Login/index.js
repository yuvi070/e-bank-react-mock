import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    pin: '',
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, pin} = this.state
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const body = {user_id: username, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const {history} = this.props
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token)
      history.replace('/')
    }
  }

  render() {
    const {username, pin} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    // if user already logged use redirect to redirect to home page
    return (
      <div className="home">
        <div className="body">
          <div className="body-image-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login-image"
            />
          </div>
          <div className="body-input-div">
            <h1>Welcome Back!</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="input-div">
                <label className="label-text" htmlFor="username">
                  User ID
                </label>
                <input
                  className="input"
                  type="text"
                  id="username"
                  value={username}
                  placeholder="Enter User ID"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-div">
                <label className="label-text" htmlFor="pin">
                  PIN
                </label>
                <input
                  className="input"
                  type="password"
                  id="pin"
                  value={pin}
                  placeholder="Enter PIN"
                  onChange={this.onChangePin}
                />
              </div>
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

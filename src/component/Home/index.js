import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const {history} = props
  const onClickButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <div className="home-main-div">
      <div className="home-header-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button type="button" onClick={onClickButton} className="logout-button">
          Logout
        </button>
      </div>
      <div className="home-bottom-section">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </div>
    </div>
  )
}

export default Home

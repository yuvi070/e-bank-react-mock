import {Switch, Route} from 'react-router-dom'

import Login from './component/Login'
import Home from './component/Home'
import NotFound from './component/NotFound'
import ProtectedRoute from './component/ProtectedRoute'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App

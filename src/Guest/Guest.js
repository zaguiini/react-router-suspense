import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import NotFound from '../NotFound'

const Login = React.lazy(() => import('./Login'))
const Register = React.lazy(() => import('./Register'))

const Guest = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
    <main>
      <p>Welcome to my app!</p>
      <React.Suspense fallback="Loading route...">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </main>
  </div>
)

export default Guest

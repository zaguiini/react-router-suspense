import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import NotFound from '../NotFound'

const Home = React.lazy(() => import('./Home'))
const Recipes = React.lazy(() => import('./Recipes'))

const User = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
    <main>
      <React.Suspense fallback="Loading route...">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </main>
  </div>
)

export default User

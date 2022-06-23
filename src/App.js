import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">List Page</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/beanies/:id"> 
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
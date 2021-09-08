import TagPosts from 'pages/TagPosts';
import UserPosts from 'pages/UserPosts';
import Users from 'pages/Users';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './constants';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route path={ROUTES.USERS} exact component={Users} />
          <Route path={ROUTES.USER_POSTS} exact component={UserPosts} />
          <Route path={ROUTES.TAG_POSTS} exact component={TagPosts} />
          <Redirect to={ROUTES.USERS} />
        </Route>
      </Switch>
    </Router>
  );
}

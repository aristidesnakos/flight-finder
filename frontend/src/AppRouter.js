import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Activation from './Activation';
import PasswordReset from './PasswordReset';
import PasswordResetConfirm from './PasswordResetConfirm';
import UserProfile from './UserProfile';

const HomePage = () => <div>Home Page</div>;
const SearchPage = () => <div>Search Page</div>;
const DetailsPage = () => <div>Details Page</div>;

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/activate/:uid/:token" component={Activation} />
        <Route path="/password/reset" exact component={PasswordReset} />
        <Route path="/password/reset/confirm/:uid/:token" component={PasswordResetConfirm} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

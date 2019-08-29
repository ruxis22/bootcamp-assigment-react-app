import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navigation from '../../components/Navigation'
import NotificationSystem from '../../components/NotificationComponent'
import PrivateRoute from "../PrivateRoute";
import Home from '../../pages/Home';
import Registration from '../../pages/Registration/'
import Login from '../../pages/Login'
import User from "../../pages/User";
import Post from "../../pages/Post";
import AddPost from "../../pages/AddPost";

const App = ({ user, logout }) => {
    return (
      <Fragment>
        <Router>
          <Navigation user={user} logout={logout} />
          <Switch>
            <Route path='/register' component={Registration} />
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            
            <PrivateRoute path='/posts/:postId' component={Post} />
            <PrivateRoute path='/users/self' component={User} />
            <PrivateRoute path='/addPost' component={AddPost} />
          </Switch>
        </Router>
        <NotificationSystem />
      </Fragment>
    );
  };
  
  export default App;
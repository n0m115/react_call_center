import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from './store';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Home from './components/Home';
import Login from './components/Login';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import Faqs from './components/Faqs';


const Router = () => (
    <Provider store={store}>
      <BrowserRouter>  
        <Switch>
          <Route path="/" component={Home} exact />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create" component={AddPost} />
          <PrivateRoute path="/list" component={Posts} />
          <Route path="/faqs" component={Faqs} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
    
);

export default Router;
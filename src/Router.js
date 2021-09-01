import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from './store';

import Home from './components/Home';
// import Post from './components/Post';
import AddPost from './components/AddPost';
import NotFound from './components/NotFound';


const Router = () => (
    <Provider store={store}>
      <BrowserRouter>  
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/create" component={AddPost} />
          {/* <Route path="/post/:id" component={Post} /> */}
          {/*for 404*/}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
    
);

export default Router;
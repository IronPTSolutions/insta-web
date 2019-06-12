import React from 'react';
import Header from './misc/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './misc/Home';
import PostsBase from './posts/PostsBase';
import NotFound from './misc/NotFound';
import PostForm from './posts/PostForm';
import Login from './auth/Login';
import PrivateRoute from '../guards/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home}/>
          <PrivateRoute exact path="/posts" component={PostsBase} />
          <PrivateRoute exact path="/posts/new" component={PostForm} />
          <Route exact path="/" component={() => (
            <Redirect to="/home" />
          )} />

          <Route path="/" component={NotFound}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;

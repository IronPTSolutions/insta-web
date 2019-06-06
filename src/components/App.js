import React from 'react';
import Header from './misc/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './misc/Home';
import PostsBase from './posts/PostsBase';
import NotFound from './misc/NotFound';
import PostForm from './posts/PostForm';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="container">
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/posts" component={PostsBase} />
          <Route exact path="/posts/new" component={PostForm} />
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

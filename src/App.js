import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import TopPage from './components/Top/TopPage'
import UsersPage from './components/User/UsersPage'
import UserForm from './components/User/UserForm'
import firebase, { FirebaseContext } from './firebase'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{firebase}}>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={TopPage} />
            <Route path="/users" exact component={UsersPage} />
            <Route path="/users/new" exact component={UserForm} />
          </Switch>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;

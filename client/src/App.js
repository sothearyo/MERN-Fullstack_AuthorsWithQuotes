import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import OneAuthor from './views/OneAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/"/>
        <NewAuthor path="new/"/>
        <UpdateAuthor path="author/:id/edit"/>
        <OneAuthor path="author/:id/"/>
      </Router>
    </div>
  );
}

export default App;

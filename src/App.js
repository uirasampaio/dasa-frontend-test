import React from 'react';
import { Navbar } from './Components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom';
import './app.css'
import { RepoView } from './Views/UserRepo/RepoView'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={RepoView} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/view/:id">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        
        <Route path="/dashboard/:id">
          <Dashboard />
        </Route>

        <Route path="/dashboard/view/:id">
          <Dashboard />
        </Route>

        <Route path="/dashboard/create/:id">
          <Dashboard />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

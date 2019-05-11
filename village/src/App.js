import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  createSmurf = smurf => {
    axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        <NavLink to="/">home</NavLink>
        <NavLink to="/smurf-form">Add a Smurf</NavLink>
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} createSmurf={this.createSmurf}/>} />
      </div>
    );
  }
}

export default App;

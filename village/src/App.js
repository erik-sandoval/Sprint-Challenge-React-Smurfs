import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [],
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

  updateSmurf = smurf => {
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }

  setActiveSmurf = smurf => {
    this.setState({
      active: smurf
    })
  }

  deleteSmurf = smurf => {
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }


  render() {
    return (
      <div className="App">
        <NavLink to="/">home</NavLink>
        <NavLink to="/smurf-form">Add a Smurf</NavLink>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} setActive={this.setActiveSmurf} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} createSmurf={this.createSmurf} />} />
        <Route path="/update-form" render={props => <UpdateForm {...props} smurf={this.state.active} updateSmurf={this.updateSmurf} />} />
      </div>
    );
  }
}

export default App;

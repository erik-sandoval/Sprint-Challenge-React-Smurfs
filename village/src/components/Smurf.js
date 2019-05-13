import React from 'react';

const Smurf = props => {

  const updateSmurf = e => {
    e.preventDefault();
    props.setActive(props)
    props.history.push('/update-form')
  }

  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props)
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={updateSmurf}>Update</button>
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


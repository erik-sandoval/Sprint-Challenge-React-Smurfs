import React, { Component } from 'react';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    componentDidMount() {
        this.setState({
            name: this.props.smurf.name,
            age: this.props.smurf.age,
            height: this.props.smurf.height,
            id: this.props.smurf.id
        })
    }

    updateSmurf = event => {
        event.preventDefault();
        // add code to create the smurf using the api
        this.props.updateSmurf(this.state)

        this.setState({
            name: '',
            age: '',
            height: ''
        });

        this.props.history.push('/')
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.updateSmurf}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button type="submit">Update Smurf</button>
                </form>
            </div>
        );
    }
}

export default UpdateForm;
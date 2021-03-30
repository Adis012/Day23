import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        firsName: "",
        lastName: "",
    };
    state = this.initialState

    render() {
        const { firsName, lastName } = this.state;
        return (
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={firsName}
                onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName}
                onChange={this.handleChange} />
            </form>
        );
    }
}
export default Form;
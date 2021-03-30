import React, { Component } from 'react';

class Flower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
            species: "Common daisy",
            family: "Asteraceae",
        };
    }

    changeColor = () => {
        this.setState({color: "blue"});
    }

    render() {
        return (
            <div>
                <h1>Flower is {this.state.color}</h1>
                <button
                type="button"
                onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}
export default Flower;
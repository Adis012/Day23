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

    render() {
        return (
            <div>
                <h1>Flower is {this.state.color}</h1>
                <p>Species is {this.state.species}</p>
            </div>
        );
    }
}
export default Flower;
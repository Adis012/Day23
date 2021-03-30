import React, { Component } from 'react';

class Flower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "Red"};
    }
    render() {
        return (
            <div>
                <h1>Flower</h1>
            </div>
        );
    }
}           

export default Flower;
import React, { Component } from 'react';

class Plant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "Flowering plant" };
    }
    render() {
        return (
            <div>
                <h2>This is Plant Component!</h2>
                <button
                type="button"
                onClick={this.changeType}>
                    Change type
                </button>
            </div>
        )
    }
}

export default Plant;

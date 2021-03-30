import { Component } from "react";

class App extends Component {
    state = {
        characters: [],
        handlerSubmit = (character) => {
            this.setState({characters: [...this.state.characters, character]});
        }
    }
}

export default App;
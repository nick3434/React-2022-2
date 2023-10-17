import './App.css';
import React from "react"

class App extends React.Component {
    // class-based component
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            isRed: false
        }
        // this.inputHandler = this.inputHandler.bind(this);
    }

    // inputHandler(e) {
    //     // console.log("最新的輸入值為:", e.target.value);
    //     // console.log("this:", this);
    //     this.setState({
    //         userInput: e.target.value
    //     })
    // }

    render() {
        const isRed = this.state.isRed;
        const userInput = this.state.userInput;
        return (
            <div className="App" >
                <h1>React state</h1>
                <h2 className={isRed ? "is-red" : ""}>Show input value: {userInput}</h2>
                <h2>Show isRed: {`${isRed}`}</h2>
                <input type="text" onInput={e => this.setState({ userInput: e.target.value })} />
                <p>Check to highlight:
                    <input type="checkbox" onChange={e => this.setState({ isRed: e.target.checked })} />
                </p>
            </div>
        );
    }
}

export default App;

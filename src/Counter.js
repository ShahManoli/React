import React, { Component } from 'react'

export class Counter extends Component {
    state = { x: 0 }

    increment = () => {
        this.setState(() => (
            { x: this.state.x + 1 }
        ))
    }

    render() {
        return (
            <>
                <h1>{this.state.x}</h1>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}

export default Counter

import React, { Component, Fragment } from "react";

import Counter from "./counter";

class App extends Component {

    state = {
        value: 0,
        list: [{
            a: 1,
            b:2
        }, {
            a: 3,
            b: 4
        }]
    }

    increment = () => {
        const { value } =  this.state;
        this.setState({
            value: value + 1
        })
    }

    decrement = () => {
        const { value } = this.state;
        this.setState({
            value: value - 1
        })
    }

   /*  executeFragment = (item, index) => {
        return (
            <Fragment key={index}>
                <div>{item.a}</div>
                <div>{item.b}</div>
            </Fragment>
        )
    }

    executeArray = (item) => ([
        <div key={index}>{item.a}</div>,
        <div>{item.b}</div>
    ])
 */
    render() {
        return [
            <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <Counter count={this.state.value} />
                </div>,
                <div>My first React app</div>
        ]
    }
}

export default App;
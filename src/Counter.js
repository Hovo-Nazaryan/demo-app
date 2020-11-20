import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super()
        this.increaseButt = this.increaseButt.bind(this)
        this.decreaseButt = this.decreaseButt.bind(this)
    };

    state = {
        count: 0
    };

    increaseButt() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decreaseButt() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div className = 'mainCount'>
                <button className = 'butt' onClick={this.decreaseButt}> Decrease </button>
                <div className = 'result'>{this.state.count}</div>
                <button className = 'butt' onClick={this.increaseButt}> Incrase </button>
            </div>
        )
    }
};

export default Counter;




import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super()
        this.increaseButt = this.increaseButt.bind(this)
        this.decreaseButt = this.decreaseButt.bind(this)
        this.resetButt = this.resetButt.bind(this)
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
        if(this.state.count !==0){
            this.setState({
                count: this.state.count - 1
            });
        }
    }
    resetButt(){
        this.setState({
            count: this.state.count * 0
        })
    }
    render() {
        return (
            <div className = 'mainCount'>
                <button className ={this.state.count==0?'disabled':'butt'} onClick={this.decreaseButt}> Decrease </button>
                <div className = 'result'> {this.state.count} </div>
                <button className = 'butt' onClick={this.increaseButt}> Incrase </button>
                <button className = 'reset' onClick={this.resetButt}>Reset</button>
            </div>
        )
    }
};

export default Counter;




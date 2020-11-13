import React, { Component } from 'react'

class Animal extends Component {
    constructor (props){
        super(props) 
    }
    render(){
        const myPropsName = this.props.name;
        const myPropsColor = this.props.color;
        return(
            <div>Its my Animals {myPropsName} they color {myPropsColor} </div>
        )
    }
}

export default Animal;
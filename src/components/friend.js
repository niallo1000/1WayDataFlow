import React, { Component } from 'react';

export default class Friend extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate of Friend (${this.props.friend.name})`)
        return false ;
    }

    componentWillUnmount() {
        console.log(`componentWillUnmount of Friend (${this.props.friend.name})`)
    }

    render() {
        console.log(`render of Friend (${this.props.friend.name})`)
        return (
            <li> 
                <h2>{this.props.friend.name}</h2> 
                <a href={'mailto:'+this.props.friend.email}>
                    {this.props.friend.email} </a>
            </li>
        );
    }
}
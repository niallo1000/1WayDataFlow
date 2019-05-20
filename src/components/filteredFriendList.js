import React, { Component } from 'react';
import Friend from './friend';

export default class FilteredFriendList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate of FilteredFriendList')
        if (this.props.list.length === nextProps.list.length ) {
            return false ;
        } else {
            return true ;
        }     
    }

    render() {
        console.log('render of FilteredFriendList')
        let friends = this.props.list.map(
            (item) =>  <Friend key={item.email} friend={item} />
        );
        return (
            <ul>
                {friends}
            </ul>
        );
    }
}
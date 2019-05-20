import React , { Component, Fragment } from 'react';
import FilteredFriendList from './components/filteredFriendList';
import localCache from './localCache';
import request from 'superagent' ;

class FriendsApp extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            searchText : ''
        };
    }
 

    componentDidMount() {
        console.log('componentDidMount of FriendsApp')
        request.get('http://localhost:3001/friends')
            .end((error, res) => { 
                if (res) {
                    let friends = JSON.parse(res.text);
                    localCache.populate(friends);
                    this.setState({}) ;                
                } else {
                    console.log(error );
                }
            })
    }

    filterFriends = (event) => {
        event.preventDefault() ;
        this.setState(
            {searchText : event.target.value.toLowerCase()});
    };

    render() {
        console.log('render of FriendsApp')
        let updatedList = 
            localCache.getAll()
               .filter(
                   (friend) => { 
                       let friendName = friend.name.toLowerCase()
                       return (friendName.search(this.state.searchText) !== -1)
                   }                
               )
        return (
            <Fragment>
                <h1>Friends List</h1>
                <input type="text" placeholder="Search" 
                    onChange={this.filterFriends} />
                <FilteredFriendList list={updatedList} />
            </Fragment>
        );
    }
}

export default FriendsApp;

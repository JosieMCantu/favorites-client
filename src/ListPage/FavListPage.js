import React, { Component } from 'react'
import {getFavorite} from '../components/utils.js';
export default class FavListPage extends Component {
    state = {
        favorites: [],
    }
    componentDidMount = async () => {
        const favorites = await getFavorite(this.props.user.token);
        this.setState({favorites})
    }
    render() {
        return (
            <div>
                <h3>Your Favorites</h3>
                {
                    this.state.favorites.map(fav => <div>
                        <p>Name: {fav.name}</p>
                        <p>Rating: {fav.rating}</p>
                    </div>)
                }
                
            </div>
        )
    }
}
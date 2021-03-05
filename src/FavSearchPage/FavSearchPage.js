import React, { Component } from 'react'
import { addFavorite, getFavorite, searchPlaces } from '../components/utils.js'

export default class FavSearchPage extends Component {
    state ={
        favorites: [],
        places: [],
        search: ''
    }
    componentDidMount = async () => {
        if (this.props.token) await this.favoritesFetch();
    } 
    favoritesFetch = async () => {
        const favorites = await getFavorite(this.props.user.token);
        this.setState({favorites})
    }
    handleSearchChange = (e) => {
        this.setState({search: e.target.value})
    }
    handleFavClick = async (place) => {
        console.log(place);
        await addFavorite({
            name: place.name,
            review_count: place.review_count,
            img_url: place.image_url,
            rating: place.rating,
            yelp_db_id: place.id
        }, this.props.user.token);
        await this.favoritesFetch();
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.searchForPlaces();

    }
    searchForPlaces = async () => {
        const places = await searchPlaces(this.state.search, this.props.user.token);
        
        this.setState({places: places});
        console.log(this.state);
    }
    ifFavorite = (place) => {
        //TA help! why is everything a favorite??
        const ifFavorites = this.state.favorites.find(favorite =>
        favorite.id === place.id);
        return Boolean(ifFavorites);
    }
    render() {
        return (
            
            <div><h3>Search for Restaurants</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search</button>
                </form>
                {this.state.places.map((place) =>
                <div>
                    <p>Name: {place.name}</p>
                    <p>Reviews: {place.review_count}</p>
                    <p>Image:{place.image_url}</p>
                    <p>Rating: {place.rating}</p>
                    <p>Yelp ID: {place.id}</p>
                    <p>{this.ifFavorite(place) ? 'XXX' : <button onClick={() => this.handleFavClick(place)}>Make Favorite</button>}</p>
                </div>)
                }
            </div>
        )
    }
}

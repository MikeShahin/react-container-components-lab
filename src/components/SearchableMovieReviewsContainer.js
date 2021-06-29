import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Dy9q1awAvUAkHSglGTSpJ8FIoQQeUrf7';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    handleSearchInputChange = e => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeHolder="Search Movies"
                        onChange={this.handleSearchInputChange}
                    />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}

export default SearchableMovieReviewsContainer

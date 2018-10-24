import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header/header';
import MovieArt from '../components/movieArt/movieArt';
import API from '../api/API';
const query = "Captain America: The First Avenger";
class Captain1 extends Component {

    state = {
        result: {},
        search: ""
    };

    // const query = "Captain America: The First Avenger";

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));

    };

    componentDidMount() {
        this.searchMovies(query);
    }

    render() {
        return (
            <div>
                <Header title={"Captain America: The First Avenger"} />
                <h3>Captain America: The First Avenger</h3>
                <MovieArt
                    title={this.state.result.Title}
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                />
            </div>
        )
    }
}

export default Captain1;
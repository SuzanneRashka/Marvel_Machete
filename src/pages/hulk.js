import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import HulkClick from '../components/hulkClick/hulkClick';
// import Synopsys from '../components/synopsys/synopsys';
// import Actors from '../components/actors/actors';
const query = "The Incredible Hulk";

// $(document).ready(function () {
//     $(document).on("click", ".super-button", function () {
//         $(".main, .half, .overlay, .button-line, .super-button, .content").addClass("active");
//         setTimeout(function () {
//             $(".main *").css("z-index", "1");
//         }, 3000);
//     });
// });

class Hulk extends Component {

    state = {
        result: {},
        search: ""
    };

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchMovies(query);
    };


    render() {
        return (
            <div>
                <Header title={query} />
                <Container>
                    <div className="hulk-main">
                        <div className="left half" id="leftSwipe">
                            <img src="http://desktopwallpaper.info/wp-content/uploads/2018/02/hulk-hd-wallpaper-for-pc.jpg" alt="hulk" />
                        </div>
                        <div className="right half" id="rightSwipe">

                        </div>
                        <HulkClick />


                        <div className="overlay"></div>
                        <div className="button-line left">
                            <div className="inner"></div>
                        </div>
                        <div className="button-line right">
                            <div className="inner"></div>
                        </div>

                    </div>
                    <div className="hulk-inner">
                        <h1>This will be info area</h1>
                    </div>

                </Container>
                <Footer title={" Iron Man 2"} to={"/Iron-Man-2"}></Footer>
            </div>
        )
    }
}

export default Hulk;

// <div className="">
// <MovieArt src={this.state.result.Poster} />
// </div>
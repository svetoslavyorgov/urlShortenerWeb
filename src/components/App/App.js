import React, {Component} from 'react';
import FormShortenUrl from '../pages/FormShortenUrl';
import {Link} from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let login = localStorage.getItem('login');

    }

    render() {
        return (
            <div className="container">
                <h1 className="page-title t-center">THE LINK KNOWS ALL. SO CAN YOU.</h1>
                <div className="join-url-shortener t-center">Measure your links with UrlShortener, the world's leading link management platform.</div>
                <FormShortenUrl/>
                <div className="join-url-shortener t-center"><Link to="/urls" >See url's list</Link></div>
            </div>
        );
    }
}

export default App;

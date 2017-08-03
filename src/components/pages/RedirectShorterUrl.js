import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class RedirectShorterUrl extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.post('http://localhost:3000/addVisit/', {shortUrl: this.props.match.params.shortUrl})
            .then(function (res) {
                if (res.data.status == 200) {
                    window.location.assign(res.data.url);
                }
            });
    }

    render() {
        return (
            <div>
                <Redirect to={'/urls'}/>
            </div>
        )
    }
}
export default RedirectShorterUrl;
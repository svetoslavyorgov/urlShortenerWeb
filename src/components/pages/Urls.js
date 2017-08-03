import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Urls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
            currentPage: 1,
            todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let that = this;
        axios.get('http://localhost:3000/urls/')
            .then(function (res) {
                console.log(res.data);
                that.setState({urls: res.data});
            });
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const {currentPage, todosPerPage, urls} = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = urls.slice(indexOfFirstTodo, indexOfLastTodo);
        const url = currentTodos.map((item, index) => {
            return <li key={index} className="shortened_link">
                <div className="unauth-title article-title">{item.url}</div>
                <div className="unauth-title article-title">localhost:8000/{item.urlShorter}</div>
                <div className="unauth-title">Visited count: {item.visitedDetails.length}</div>
                <div className="unauth-title">visited dates:
                    <ul>
                        { item.visitedDetails.length > 0 ? item.visitedDetails.map((i, key) => {
                                return <li key={key}>
                                    {i.visitedDate}
                                </li>
                            }) : '' }
                    </ul>
                </div>

            </li>;
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(urls.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <div>
                <div className="join-url-shortener t-center"><Link to="/">Generate short url </Link></div>
                <div className="link-container mid-container">
                    <ul>
                        {url}
                    </ul>
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </div>

            </div>
        );
    }
}
export default Urls;